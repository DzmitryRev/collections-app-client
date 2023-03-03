import React from "react";
import { useTranslation } from "react-i18next";
import { NewCollectionsWidget } from "../../modules/collection-module";
import { Box } from "@mui/material";

export function MainPage() {
  return (
    <Box>
      <NewCollectionsWidget />
    </Box>
  );
}
