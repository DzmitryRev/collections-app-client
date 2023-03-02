import React, { PropsWithChildren } from "react";
import { LightTypo } from "../../../shared/components";

export function Tag({ children }: PropsWithChildren) {
  return (
    <LightTypo
      sx={{
        display: "inline-block",
        m: "3px",
        px: "3px",
        borderRadius: "5px",
        bgcolor: "primary.main",
        color: "black",
        fontWeight: 600,
      }}
    >
      {children}
    </LightTypo>
  );
}
