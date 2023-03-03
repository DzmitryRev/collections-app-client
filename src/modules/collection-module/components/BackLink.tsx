import React from "react";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, CustomLink } from "../../../shared/components";
import { useTranslation } from "react-i18next";

interface IBackLink {
  link: string;
}

export function BackLink({ link }: IBackLink) {
  const { t } = useTranslation("global");

  return (
    <Box sx={{ mb: 1 }}>
      <CustomLink to={link}>
        <Button>
          <ArrowBackIcon sx={{ mr: 1 }} /> {t("back")}
        </Button>
      </CustomLink>
    </Box>
  );
}
