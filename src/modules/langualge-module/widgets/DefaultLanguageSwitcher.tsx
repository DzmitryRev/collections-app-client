import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setLanguage } from "../store/languageSlice";
import { AvailableLanguagesType, availbaleLanguages } from "../../../shared/i18n/i18n";
import { Button } from "../../../shared/components";

export function DefaultLanguageSwitcher() {
  const language = useAppSelector((state) => state.LanguageReducer.language);
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setIsMenuOpen(false);
    setAnchorEl(null);
  };

  const changeLanguage = (lang: AvailableLanguagesType) => {
    dispatch(setLanguage(lang));
    handleClose();
  };

  const availableLanguagesLang = Object.keys(availbaleLanguages).filter(
    (lang) => lang !== language
  );

  return (
    <>
      <Button variant="text" onClick={handleClick}>
        {language}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {availableLanguagesLang.map((lang) => {
          return (
            <MenuItem
              key={lang}
              onClick={() => {
                changeLanguage(lang as AvailableLanguagesType);
              }}
            >
              {lang.toUpperCase()}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
