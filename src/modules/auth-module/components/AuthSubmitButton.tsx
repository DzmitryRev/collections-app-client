import { Button } from "../../../shared/components";
import { ButtonProps } from "@mui/material";

export function AuthSubmitButton(props: ButtonProps) {
  return <Button type="submit" variant="contained" size="large" {...props} />;
}
