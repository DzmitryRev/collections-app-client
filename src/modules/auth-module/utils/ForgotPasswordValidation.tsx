import * as yup from "yup";

export const forgotPasswordInitialValue = {
  email: "",
};

export const forgotPasswordValidationSchema = yup.object({
  email: yup.string().email("enter_valid_email").required("required_field"),
});
