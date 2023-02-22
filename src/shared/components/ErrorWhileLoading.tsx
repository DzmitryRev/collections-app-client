import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { BodyTypo } from ".";
import { Box } from "@mui/system";

export function ErrorWhileLoading() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <ErrorIcon sx={{ mb: 2, fontSize: "40px" }} />
      <BodyTypo>Произошла ошибка при загрузке</BodyTypo>
    </Box>
  );
}
