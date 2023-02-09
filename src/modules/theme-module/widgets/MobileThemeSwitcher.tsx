import React from "react";
import { ListItemText, Switch, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toggleTheme } from "../store/themeSlice";

export function MobileThemeSwitcher() {
  const themeMode = useAppSelector((state) => state.ThemeReducer.mode);
  const dispatch = useAppDispatch();
  return (
    <>
      <ListItemText>
        <Typography sx={{ fontWeight: 700, letterSpacing: 1.7 }} variant="h5">
          Dark mode
        </Typography>
      </ListItemText>

      <Switch
        checked={themeMode === "dark" ? true : false}
        onChange={() => {
          dispatch(toggleTheme());
        }}
        inputProps={{ "aria-label": "change theme" }}
      />
    </>
  );
}
