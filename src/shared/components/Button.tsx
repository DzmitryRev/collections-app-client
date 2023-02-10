import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

export function Button({ ...args }: ButtonProps) {
  return <MuiButton sx={{ fontWeight: 700 }} {...args} />;
}
