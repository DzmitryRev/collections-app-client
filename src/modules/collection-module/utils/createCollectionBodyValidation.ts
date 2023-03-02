import * as yup from "yup";

export const createCollectionBodyValidation = yup.object({
  name: yup.string().required("required_field"),
  theme: yup.string().required("required_field"),
});
