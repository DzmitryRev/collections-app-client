import React from "react";
import { Box, BoxProps, Divider, styled, useTheme } from "@mui/material";
import { Button, Logo } from "../../shared/components";
import { DefaultThemeSwitcher } from "../../modules/theme-module";
import AppSettingsMobile from "./AppSettingsMobile";

const HeaderContainerSX = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  py: 2,
  px: 1,
};

const HeaderHandlersContainerSX = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const HeaderLoginContainerSX = {
  ml: 2,
};

const MobileSettingsContainerSX = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const PCSettingsContainerSX = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export default function Header() {
  return (
    <>
      <Box sx={HeaderContainerSX}>
        <Logo />
        <Box sx={HeaderHandlersContainerSX}>
          <MobileSettingsContainerSX>
            <AppSettingsMobile />
          </MobileSettingsContainerSX>
          <PCSettingsContainerSX>
            <DefaultThemeSwitcher />
          </PCSettingsContainerSX>
          <Box sx={HeaderLoginContainerSX}>
            <Button variant="contained" size="small">
              Login
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
