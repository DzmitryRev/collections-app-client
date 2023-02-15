import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export function BodyTypo({ sx, ...args }: TypographyProps) {
  return <Typography sx={{ fontWeight: 400, ...sx }} variant="body1" {...args} />;
}
