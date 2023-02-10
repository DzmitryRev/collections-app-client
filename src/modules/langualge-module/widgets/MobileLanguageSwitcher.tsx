import React from "react";
import { ListItemText, Switch, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { AvailableLanguagesType, AvailbaleLanguages } from "../../../shared/i18n/i18n";
import { setLanguage } from "../store/languageSlice";

export function MobileLanguageSwitcher() {
  const language = useAppSelector((state) => state.LanguageReducer.language);
  const dispatch = useAppDispatch();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: AvailableLanguagesType
  ) => {
    if (newLanguage !== null) {
      dispatch(setLanguage(newLanguage));
    }
  };
  const availableLanguagesLang = Object.keys(AvailbaleLanguages);
  return (
    <>
      <ListItemText>
        <Typography sx={{ fontWeight: 700, letterSpacing: 1.7 }} variant="h5">
          Language
        </Typography>
      </ListItemText>

      <ToggleButtonGroup
        color="primary"
        value={language}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        {availableLanguagesLang.map((lang) => {
          return (
            <ToggleButton key={lang} value={lang}>
              {lang}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </>
  );
}
