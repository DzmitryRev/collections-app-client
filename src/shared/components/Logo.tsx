import React from "react";
import { Typography, useTheme } from "@mui/material";

// completed

export default function Logo() {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        fontFamily: "Bungee Shade",
        fontSize: "26px",
        cursor: "pointer",
        display: "inline-block",
        "&:hover": {
          transform: "translate(1px, -1px)",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "16px",
        },
      }}
    >
      Collectory
    </Typography>
  );
}
