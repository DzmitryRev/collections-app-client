import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AuthInformationWidget } from "../../modules/auth-module";
import { Button, CustomLink } from "../../shared/components";
import { LOGIN } from "../../shared/constants/paths";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export function EmailConfirmedPage() {
  const { t } = useTranslation(["informationPages", "global"]);
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <AuthInformationWidget title={t("email_verified")} body={t("email_verified_body")}>
          <CheckCircleIcon sx={{ fontSize: "50px" }} />
        </AuthInformationWidget>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <CustomLink to={LOGIN}>
          <Button variant="contained" size="small">
            {t("login", { ns: "global" })}
          </Button>
        </CustomLink>
      </Box>
    </>
  );
}
