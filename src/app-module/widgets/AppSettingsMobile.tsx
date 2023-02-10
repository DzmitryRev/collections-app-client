import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, styled } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { MobileThemeSwitcher } from "../../modules/theme-module";
import { MobileLanguageSwitcher } from "../../modules/langualge-module";

const AppSettingsListItem = styled(ListItem)(() => ({
  px: 5,
}));

export default function AppSettingsMobile() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        sx={{
          p: "4px",
        }}
        aria-label="open settings"
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      >
        <SettingsIcon />
      </IconButton>
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      >
        <List>
          <AppSettingsListItem>
            <MobileThemeSwitcher />
          </AppSettingsListItem>
          <AppSettingsListItem>
            <MobileLanguageSwitcher />
          </AppSettingsListItem>
        </List>
      </Drawer>
    </>
  );
}
