import React from "react";
import { Box, IconButton } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleTheme } from "../../modules/theme-module";

export default function ThemeSwitcher() {
  const themeMode = useAppSelector((state) => state.ThemeReducer.mode);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <IconButton
        aria-label="change theme"
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        {themeMode === "dark" ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>
    </Box>
  );
}
