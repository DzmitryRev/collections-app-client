import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { BodyTypo, SecondaryHeadingTypo } from "../../../shared/components";

interface IAuthInformationWidgetProps {
  title: string;
  body: string;
}

export function AuthInformationWidget({
  title,
  body,
  children,
}: PropsWithChildren<IAuthInformationWidgetProps>) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ mb: 1 }}>{children}</Box>
      <SecondaryHeadingTypo sx={{ mb: 1 }}>{title}</SecondaryHeadingTypo>
      <BodyTypo>{body}</BodyTypo>
    </Box>
  );
}
