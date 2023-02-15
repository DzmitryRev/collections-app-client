import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { AuthInformationWidget } from "../../modules/auth-module";
import { ProtectedPageByParams } from "../Hocs/ProtectedPageByParams";

export default function ConfirmationErrorPage() {
  return (
    <ProtectedPageByParams>
      <AuthInformationWidget
        title="Invalid link"
        body="Link does not work. Perhaps the confirmation time has expired or such an account is already registered"
      >
        <ErrorIcon sx={{ fontSize: "50px" }} />
      </AuthInformationWidget>
    </ProtectedPageByParams>
  );
}
