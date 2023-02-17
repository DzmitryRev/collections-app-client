import React from "react";
import { Alert } from "@mui/material";
import { LightTypo } from "../../../shared/components";
import { useAppSelector } from "../../../store/hooks";
import { useTranslation } from "react-i18next";

export function ConnectionErrorAlert() {
  const { t } = useTranslation("alerts");
  const { isError } = useAppSelector((state) => state.ConnectionErrorReducer);
  return (
    <>
      {isError ? (
        <Alert sx={{ maxWidth: "420px" }} severity="error">
          <LightTypo>{t("server_unavailable")}</LightTypo>
        </Alert>
      ) : (
        <></>
      )}
    </>
  );
}
