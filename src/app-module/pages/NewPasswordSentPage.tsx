import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { AuthInformationWidget } from "../../modules/auth-module";

export function NewPasswordSentPage() {
  return (
    <AuthInformationWidget title="Check your email" body="New password has been sent to your email">
      <EmailIcon sx={{ fontSize: "50px" }} />
    </AuthInformationWidget>
  );
}
