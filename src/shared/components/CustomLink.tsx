import React from "react";
import { Link, LinkProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface ILinkProps extends LinkProps {
  to: string;
}

export function CustomLink({ to, sx, ...args }: ILinkProps) {
  return <Link component={RouterLink} to={to} sx={{ textDecoration: "none", ...sx }} {...args} />;
}
