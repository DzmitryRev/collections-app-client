import React from "react";
import { Box, CircularProgress } from "@mui/material";

export function Spinner() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
      <CircularProgress />
    </Box>
  );
}
