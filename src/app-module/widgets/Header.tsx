import React from "react";
import { Box, Divider, styled } from "@mui/material";
import { Button, Logo } from "../../shared/components";
import { DefaultThemeSwitcher } from "../../modules/theme-module";
import AppSettingsMobile from "./AppSettingsMobile";
import { DefaultLanguageSwitcher } from "../../modules/langualge-module";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("header");
  return (
    <>
      <Box sx={HeaderContainerSX}>
        <Logo />
        <Box sx={HeaderHandlersContainerSX}>
          <MobileSettingsContainerSX>
            <AppSettingsMobile />
          </MobileSettingsContainerSX>
          <PCSettingsContainerSX>
            <DefaultLanguageSwitcher />
            <DefaultThemeSwitcher />
          </PCSettingsContainerSX>
          <Box sx={HeaderLoginContainerSX}>
            <Button variant="contained" size="small">
              {t("login")}
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
