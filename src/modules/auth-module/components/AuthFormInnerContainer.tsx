import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";

export function AuthFormInnerContainer({ children }: PropsWithChildren) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "310px" }}>{children}</Box>
    </Box>
  );
}
