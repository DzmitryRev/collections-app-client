import { AuthErrorType } from "../types";

export const createAuthApiError = (apiError: AuthErrorType | undefined): string[] => {
  const errors: string[] = [];
  if (!apiError) return errors;
  const globalError = apiError.message;
  globalError && errors.push(globalError);
  const validationErrors = apiError.errors?.map((item) => item.msg) || [];
  return [...errors, ...validationErrors];
};
