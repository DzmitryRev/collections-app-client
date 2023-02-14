export type AuthErrorType = {
  message: string;
  errors: { value: string; msg: string; param: string }[];
};
