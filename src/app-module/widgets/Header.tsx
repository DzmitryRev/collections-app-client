import React from "react";
import { Box, Divider } from "@mui/material";
import Logo from "../../shared/components/Logo";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: 2,
          px: 1,
        }}
      >
        <Logo />
        <ThemeSwitcher />
      </Box>
      <Divider />
    </>
  );
}
