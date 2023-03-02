import * as yup from "yup";

export const addCustomFieldValidationSchema = yup.object({
  name: yup.string().required("required_field"),
  type: yup.string().required("required_field"),
});
