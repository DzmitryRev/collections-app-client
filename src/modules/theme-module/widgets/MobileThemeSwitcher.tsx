import React from "react";
import { ListItemText, Switch, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toggleTheme } from "../store/themeSlice";
import { useTranslation } from "react-i18next";

export function MobileThemeSwitcher() {
<<<<<<< Updated upstream
  const { t } = useTranslation("mobile theme switcher");
=======
<<<<<<< Updated upstream
=======
  const { t } = useTranslation("personalization");
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  const themeMode = useAppSelector((state) => state.ThemeReducer.mode);
  const dispatch = useAppDispatch();
  return (
    <>
      <ListItemText>
        <Typography sx={{ fontWeight: 700, letterSpacing: 1.7 }} variant="h5">
<<<<<<< Updated upstream
          {t("dark mode")}
=======
<<<<<<< Updated upstream
          Dark mode
=======
          {t("dark_mode")}
>>>>>>> Stashed changes
>>>>>>> Stashed changes
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
