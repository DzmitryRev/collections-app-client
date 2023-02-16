import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { AuthInformationWidget } from "../../modules/auth-module";
import { useTranslation } from "react-i18next";

export function NewPasswordSentPage() {
  const { t } = useTranslation("informationPages");
  return (
    <AuthInformationWidget
      title={t("check_your_email")}
      body={t("new_password_sent")}
    >
      <EmailIcon sx={{ fontSize: "50px" }} />
    </AuthInformationWidget>
  );
}
