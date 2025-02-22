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

export const userProfileSchema = Yup.object({
  userFullName: Yup.string().min(2).max(30).required(),
  userAge: Yup.number().min(16).required(),
  userFindLocation: Yup.string().required(),
  userEmail: Yup.string().email().required(),
  userPhoneNumber: Yup.string().min(11).max(11).required(),
});

export const jobSearchSchama = Yup.object({
  jobTitle: Yup.string().min(1).required(),
});
