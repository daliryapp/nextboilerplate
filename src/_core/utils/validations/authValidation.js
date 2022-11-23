import * as yup from "yup";

export const loginWithEmailValidation = yup.object({
  email: yup
    .string()
    .required("ایمیل را وارد کنید")
    .email("ایمیل موجود نامعتبر است"),
  password: yup
    .string()
    .required("پسورد را وارد کنید")
    .matches(/^(?=.*?[a-z])(?=.*?[0-9]).{8,64}$/, "passwordNotValid"),
  // captcha: yup.string().required("captchaError").nullable(),
});

export const loginWithMobileValidation = yup.object({
  username: yup.string().min(8, "mobileNotValid").required("mobileRequired"),
  password: yup
    .string()
    .required("passwordRequired")
    .matches(/^(?=.*?[a-z])(?=.*?[0-9]).{8,64}$/, "passwordNotValid"),
  // captcha: yup.string().required("captchaError").nullable(),
});

export const registerWithEmailValidation = yup.object({
  email: yup
    .string()
    .required("ایمیل را وارد کنید")
    .email("ایمیل موجود نامعتبر است"),
  name: yup.string().required("نام را وارد کنید"),
  password: yup
    .string()
    .required("پسورد را وارد کنید")
    .matches(
      /^(?=.*?[a-z])(?=.*?[0-9]).{8,64}$/,
      "فرم پسورد درست نیست باید شامل حروف بزرگ انگیلی و کوچک و اعداد باشد"
    ),
  // captcha: yup.string().required("captchaError").nullable(),
  passwordConfirmation: yup
    .string()
    .required("تکرار پسورد را وارد کنید")
    .matches(
      /^(?=.*?[a-z])(?=.*?[0-9]).{8,64}$/,
      "فرم پسورد درست نیست باید شامل حروف بزرگ انگیلی و کوچک و اعداد باشد"
    )
    .oneOf([yup.ref("password"), null], "تکرار پسورد یکسان نیست"),
});

export const registerWithMobileValidation = yup.object({
  mobile: yup.string().min(8, "mobileNotValid").required("mobileRequired"),
  firstName: yup.string().required("nameRequired"),
  lastName: yup.string().required("nameRequired"),
  acceptRules: yup.boolean().oneOf([true], "termNotChecked"),
  password: yup
    .string()
    .matches(/^(?=.*?[a-z])(?=.*?[0-9]).{8,64}$/, "passwordNotValid")
    .required("passwordRequired"),
  confirmPassword: yup
    .string()
    .required("تکرار پسورد را وارد کنید")
    .matches(
      /^(?=.*?[a-z])(?=.*?[0-9]).{8,64}$/,
      "فرم پسورد درست نیست باید شامل حروف بزرگ انگیلی و کوچک و اعداد باشد"
    )
    .oneOf([yup.ref("password"), null], "تکرار پسورد یکسان نیست"),
});

export const verifValidation = yup.object({
  code: yup
    .string()
    .matches(/^\d{4}$/, "codeMin")
    .required("codeRequired"),
});

export const forgotPasswordWithEmailValidation = yup.object({
  email: yup
    .string()
    .required("ایمیل را وارد کنید")
    .email("ایمیل موجود نامعتبر است"),
  // captcha: yup.string().required("captchaError").nullable(),
});

export const forgotPasswordWithMobileValidation = yup.object({
  mobile: yup.string().min(8, "mobileNotValid").required("mobileRequired"),
  // captcha: yup.string().required("captchaError").nullable(),
});

export const resetPasswordValidation = yup.object({
  password: yup
    .string()
    .matches(/^(?=.*?[a-z])(?=.*?[0-9]).{8,64}$/, "passwordNotValid")
    .required("passwordRequired"),
  passwordConfirmation: yup
    .string()
    .matches(/^(?=.*?[a-z])(?=.*?[0-9]).{8,64}$/, "passwordNotValid")
    .oneOf([yup.ref("password"), null], "passwordConfirmationNotMatch")
    .required("passwordConfirmationRequired"),
});

export const changePasswordValidation = yup.object({
  currentPassword: yup.string().required("requiredField"),
  newPassword: yup
    .string()
    .matches(/^(?=.*?[a-z])(?=.*?[0-9]).{8,64}$/, "passwordNotValid")
    .required("requiredField"),
  newPasswordConfirm: yup
    .string()
    .matches(/^(?=.*?[a-z])(?=.*?[0-9]).{8,64}$/, "passwordNotValid")
    .oneOf([yup.ref("newPassword"), null], "passwordConfirmationNotMatch")
    .required("requiredField"),
});

export const addEmailValidation = yup.object({
  email: yup.string().required("emailRequired").email("emailNotValid"),
});

export const addMobileValidation = yup.object({
  mobile: yup.string().min(8, "mobileNotValid").required("mobileRequired"),
});

export const updateProfileValidation = yup.object({
  name: yup
    .string()
    .min(3, "Enter name with at least 3 character!")
    .max(15, "Enter name with at last 15 character!"),
});
