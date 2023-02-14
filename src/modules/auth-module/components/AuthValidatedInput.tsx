import { ValidatedInputPropsType, ValidatedInput } from "../../../shared/components";

export function AuthValidatedInput(props: ValidatedInputPropsType) {
  return <ValidatedInput sx={{ mb: 1 }} variant="filled" size="small" fullWidth {...props} />;
}
