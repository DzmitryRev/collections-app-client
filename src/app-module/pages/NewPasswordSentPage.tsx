import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { AuthInformationWidget } from "../../modules/auth-module";
import { ProtectedPageByState } from "../Hocs/ProtectedPageByState";

export function NewPasswordSentPage() {
  return (
    <ProtectedPageByState>
      <AuthInformationWidget
        title="Check your email"
        body="New password has been sent to your email"
      >
        <EmailIcon sx={{ fontSize: "50px" }} />
      </AuthInformationWidget>
    </ProtectedPageByState>
  );
}
