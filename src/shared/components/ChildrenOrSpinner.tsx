import React from "react";
import { Box, BoxProps, CircularProgress } from "@mui/material";

interface IChildrenOrSpinnerProps extends BoxProps {
  condition: boolean;
}

export function ChildrenOrSpinner({ condition, children, sx, ...args }: IChildrenOrSpinnerProps) {
  return (
    <Box sx={{ ...sx }} {...args}>
      {condition ? <CircularProgress size="30px" /> : children}
    </Box>
  );
}
