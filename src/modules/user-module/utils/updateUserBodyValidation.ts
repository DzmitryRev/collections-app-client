import * as yup from "yup";

export const updateUserBodyValidationSchema = yup.object({
  name: yup.string().required("required_field"),
});
