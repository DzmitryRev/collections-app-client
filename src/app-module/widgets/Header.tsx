import React from "react";
import { Box, Divider } from "@mui/material";
import Logo from "../../shared/components/Logo";

export default function Header() {
  return (
    <>
      <Box sx={{ py: 2, px: 1 }}>
        <Logo />
        {/**
         * TODO:
         * search input
         * user icon with dropdown or signin/signup links
         * OR
         * burger menu with search input and user icon with dropdown or signin/signup links
         */}
      </Box>
      <Divider />
    </>
  );
}
