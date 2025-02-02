import * as Yup from "yup";

export const userSignupSchema = Yup.object({
  userName: Yup.string().min(3).max(30).trim().required("Name is required"),
  userEmail: Yup.string().email().required(),
  userPassword: Yup.string().min(8).max(20).required(),
  userConfirmPassword: Yup.string()
    .min(8)
    .max(20)
    .required()
    .oneOf([Yup.ref("userPassword"), null], "Passwords don't match"),
});
