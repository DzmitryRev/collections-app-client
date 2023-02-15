import React from "react";
import { Box } from "@mui/material";
import { LoginForm } from "../../modules/auth-module";
import { SecondaryHeadingTypo } from "../../shared/components";
import { useTranslation } from "react-i18next";
import { RedirectIfAuth } from "../Hocs/RedirectIfAuth";

export function LoginPage() {
  const { t } = useTranslation("headings");
  return (
    <RedirectIfAuth>
      <Box>
        <SecondaryHeadingTypo sx={{ textAlign: "center", mb: 2 }}>
          {t("login_into_account")}
        </SecondaryHeadingTypo>
        <LoginForm />
      </Box>
    </RedirectIfAuth>
  );
}
