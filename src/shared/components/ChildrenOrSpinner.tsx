import React from "react";
import { Box, BoxProps, CircularProgress } from "@mui/material";

interface IChildrenOrSpinnerProps extends BoxProps {
  condition: boolean;
}

export function ChildrenOrSpinner({ condition, children, sx, ...args }: IChildrenOrSpinnerProps) {
  return (
    <>
      {condition ? (
        <Box sx={{ display: "flex", justifyContent: "center", ...sx }}>
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </>
  );
}
