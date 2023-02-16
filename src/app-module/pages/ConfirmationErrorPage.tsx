import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { AuthInformationWidget } from "../../modules/auth-module";
import { useTranslation } from "react-i18next";

export function ConfirmationErrorPage() {
  const { t } = useTranslation("informationPages");
  return (
    <AuthInformationWidget title={t("invalid_link")} body={t("invalid_link-body")}>
      <ErrorIcon sx={{ fontSize: "50px" }} />
    </AuthInformationWidget>
  );
}
