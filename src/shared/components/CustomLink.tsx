import React from "react";
import { Link, LinkProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface ILinkProps extends LinkProps {
  to: string;
}

export function CustomLink({ to, ...args }: ILinkProps) {
  return <Link component={RouterLink} to={to} {...args} />;
}
