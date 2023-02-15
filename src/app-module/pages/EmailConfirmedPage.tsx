import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AuthInformationWidget } from "../../modules/auth-module";
import { Button, CustomLink } from "../../shared/components";
import { LOGIN } from "../../shared/constants/paths";
import { Box } from "@mui/material";
import { ProtectedPageByParams } from "../Hocs/ProtectedPageByParams";

export default function EmailConfirmedPage() {
  return (
    <ProtectedPageByParams>
      <Box sx={{ mb: 2 }}>
        <AuthInformationWidget
          title="Email successfully verified"
          body="Thank you for registering on our website. Now you can create collections."
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
