import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTheme } from "@emotion/react";
import { MobileThemeSwitcher } from "../../modules/theme-module";

export default function AppSettingsMobile() {
  const theme = useTheme();
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
          <ListItem sx={{ px: 5 }}>
            <MobileThemeSwitcher />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
