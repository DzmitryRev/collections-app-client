import React from "react";
import { Box } from "@mui/material";
import RegistrationForm from "../../modules/auth-module/widgets/RegistrationForm";
import { SecondaryHeadingTypo } from "../../shared/components";
import { useTranslation } from "react-i18next";

export function RegistrationPage() {
  const { t } = useTranslation("headings");
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <SecondaryHeadingTypo sx={{ textAlign: "center", mb: 2 }}>
        {t("create_account")}
      </SecondaryHeadingTypo>
      <RegistrationForm />
    </Box>
  );
}
