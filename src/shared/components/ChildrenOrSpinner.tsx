import React from "react";
import { Box, BoxProps, CircularProgress } from "@mui/material";

interface IChildrenOrSpinnerProps extends BoxProps {
  condition: boolean;
}

export function ChildrenOrSpinner({ condition, children, ...args }: IChildrenOrSpinnerProps) {
  console.log(condition);
  return <Box {...args}>{condition ? <CircularProgress /> : children}</Box>;
}
