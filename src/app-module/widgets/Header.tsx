import React from "react";
import { Box, Divider, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DefaultLanguageSwitcher } from "../../modules/langualge-module";
import { DefaultThemeSwitcher } from "../../modules/theme-module";
import { Button, Logo } from "../../shared/components";
import { CustomLink } from "../../shared/components/CustomLink";
import { LOGIN } from "../../shared/constants/paths";
import AppSettingsMobile from "./AppSettingsMobile";
import { useAppSelector } from "../../store/hooks";
import { useLogout } from "../../modules/auth-module";

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
  const { t } = useTranslation("global");

  const { logout } = useLogout();

  const { user } = useAppSelector((store) => store.AuthReducer);

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
            {user ? (
              <>{user.name}</>
            ) : (
              <CustomLink to={LOGIN}>
                <Button variant="contained" size="small">
                  {t("login")}
                </Button>
              </CustomLink>
            )}
          </Box>
          <Button variant="contained" size="small" onClick={logout}>
            logout
          </Button>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
