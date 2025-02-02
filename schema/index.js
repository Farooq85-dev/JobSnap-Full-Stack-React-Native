import * as Yup from "yup";

export const userSignUpSchema = Yup.object({
  userName: Yup.string().min(3).max(30).trim().required(),
  userEmail: Yup.string().trim().email().required(),
  userPassword: Yup.string().min(8).max(20).required(),
  userConfirmPassword: Yup.string()
    .min(8)
    .max(20)
    .required()
    .oneOf([Yup.ref("userPassword"), null]),
});

export const userSignInSchema = Yup.object({
  userEmail: Yup.string().trim().email().required(),
  userPassword: Yup.string().min(8).max(20).required(),
});
