import React from "react";
import { ListItemText, Switch, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store";
import { toggleTheme } from "../store/themeSlice";
import { useTranslation } from "react-i18next";

export function MobileThemeSwitcher() {
  const { t } = useTranslation("personalization");
  const themeMode = useAppSelector((state) => state.ThemeReducer.mode);
  const dispatch = useAppDispatch();
  return (
    <>
      <ListItemText>
        <Typography sx={{ fontWeight: 700, letterSpacing: 1.7 }} variant="h5">
          {t("dark_mode")}
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
