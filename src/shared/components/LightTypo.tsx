import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export function LightTypo({ sx, ...args }: TypographyProps) {
  return <Typography sx={{ fontWeight: 300, ...sx }} variant="body2" {...args} />;
}
