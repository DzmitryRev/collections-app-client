import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { AuthInformationWidget } from "../../modules/auth-module";

export function ConfirmEmailPage() {
  return (
    <AuthInformationWidget
      title="Check your email"
      body="We sent you a quick email to sign in at your email"
    >
      <EmailIcon sx={{ fontSize: "50px" }} />
    </AuthInformationWidget>
  );
}
