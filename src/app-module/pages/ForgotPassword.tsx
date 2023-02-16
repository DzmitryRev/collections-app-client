import React from "react";
import { Box } from "@mui/material";
import { ForgotPasswordForm } from "../../modules/auth-module";
import { SecondaryHeadingTypo } from "../../shared/components";
import { useTranslation } from "react-i18next";

export function ForgotPassword() {
  const { t } = useTranslation("headings");
  return (
    <Box>
      <SecondaryHeadingTypo sx={{ textAlign: "center", mb: 2 }}>
        {t("enter_your_email")}
      </SecondaryHeadingTypo>
      <ForgotPasswordForm />
    </Box>
  );
}
