import React from "react";
import { ListItemText, Switch, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toggleTheme } from "../store/themeSlice";
import { useTranslation } from "react-i18next";

export function MobileThemeSwitcher() {
  const { t } = useTranslation("mobile theme switcher");
  const themeMode = useAppSelector((state) => state.ThemeReducer.mode);
  const dispatch = useAppDispatch();
  return (
    <>
      <ListItemText>
        <Typography sx={{ fontWeight: 700, letterSpacing: 1.7 }} variant="h5">
          {t("dark mode")}
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
