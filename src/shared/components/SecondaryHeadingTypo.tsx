import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export function SecondaryHeadingTypo({ sx, ...args }: TypographyProps) {
  return <Typography sx={{ fontWeight: 500, ...sx }} variant="h6" {...args} />;
}
