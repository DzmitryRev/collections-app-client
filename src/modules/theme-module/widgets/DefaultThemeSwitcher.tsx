import React from "react";
import { IconButton } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useAppDispatch, useAppSelector } from "../../../store";
import { toggleTheme } from "../store/themeSlice";

export function DefaultThemeSwitcher() {
  const themeMode = useAppSelector((state) => state.ThemeReducer.mode);
  const dispatch = useAppDispatch();

  return (
    <IconButton
      sx={{ p: "4px" }}
      aria-label="change theme"
      onClick={() => {
        dispatch(toggleTheme());
      }}
    >
      {themeMode === "dark" ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  );
}
