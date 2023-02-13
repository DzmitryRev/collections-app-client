import * as yup from "yup";

export const registrationInitialValue = {
  name: "",
  email: "",
  password: "",
};

export const registrationValidationSchema = yup.object({
  name: yup.string().required("Required field"),
  email: yup.string().email("Enter a valid email").required("Required field"),
  password: yup.string().required("Required field").min(6),
});
