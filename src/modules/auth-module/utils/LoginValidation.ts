import * as yup from "yup";

export const loginInitialValue = {
  email: "",
  password: "",
};

export const loginValidationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Required field"),
  password: yup.string().required("Required field").min(6),
});
