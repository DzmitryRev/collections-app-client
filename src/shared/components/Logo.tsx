import React from "react";
import { Typography, useTheme } from "@mui/material";

export function Logo() {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        fontFamily: "Righteous",
        fontSize: "22px",
        cursor: "pointer",
        display: "inline-block",
      }}
    >
      Collectory
    </Typography>
  );
}
