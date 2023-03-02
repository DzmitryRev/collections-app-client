import React from "react";
import { Box, BoxProps } from "@mui/material";
import { LightTypo } from "../../../shared/components";

export function FieldContainer({ sx, children }: BoxProps) {
  return <Box sx={{ mb: 2, ...sx }}>{children}</Box>;
}

export function FieldTypeLabelContainer({ children }: BoxProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "end", mb: 1 }}>
      <LightTypo sx={{ fontStyle: "italic" }}>{children}</LightTypo>
    </Box>
  );
}
