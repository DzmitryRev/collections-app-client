import * as yup from "yup";

export const loginInitialValue = {
  email: "",
  password: "",
};

export const loginValidationSchema = yup.object({
  email: yup.string().email("enter_valid_email").required("required_field"),
  password: yup.string().required("required_field").min(6, "password_valid_error"),
});
