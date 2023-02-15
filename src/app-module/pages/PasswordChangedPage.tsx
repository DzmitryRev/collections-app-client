import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AuthInformationWidget } from "../../modules/auth-module";
import { Button, CustomLink } from "../../shared/components";
import { LOGIN } from "../../shared/constants/paths";
import { Box } from "@mui/material";
import { ProtectedPageByParams } from "../Hocs/ProtectedPageByParams";

export function PasswordChangedPage() {
  return (
    <ProtectedPageByParams>
      <Box sx={{ mb: 2 }}>
        <AuthInformationWidget
          title="Password changed"
          body="Now you can log in to you account with new password"
        >
          <CheckCircleIcon sx={{ fontSize: "50px" }} />
        </AuthInformationWidget>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <CustomLink to={LOGIN}>
          <Button variant="contained" size="small">
            login
          </Button>
        </CustomLink>
      </Box>
    </ProtectedPageByParams>
  );
}
