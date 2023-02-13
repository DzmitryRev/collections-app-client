import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

export function Button({ sx, ...args }: ButtonProps) {
  return <MuiButton sx={{ fontWeight: 600, ...sx }} {...args} />;
}
