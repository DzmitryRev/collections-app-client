import * as yup from "yup";

export const registrationInitialValue = {
  name: "",
  email: "",
  password: "",
};

export const registrationValidationSchema = yup.object({
  name: yup.string().required("required_field"),
  email: yup.string().email("enter_valid_email").required("required_field"),
  password: yup.string().required("required_field").min(6, "password_valid_error"),
});
