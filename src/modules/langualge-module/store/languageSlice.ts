import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AvailableLanguagesType, changeLanguage } from "../../../shared/i18n/";

interface LanguageState {
  language: AvailableLanguagesType;
}

const LANGUAGE_LS_NAME = "trest";

const savedLanguage = (localStorage.getItem(LANGUAGE_LS_NAME) as AvailableLanguagesType) || "en";

changeLanguage(savedLanguage);

const initialState: LanguageState = {
  language: savedLanguage,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<AvailableLanguagesType>) => {
      state.language = action.payload;
      changeLanguage(action.payload);
      localStorage.setItem(LANGUAGE_LS_NAME, state.language);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const LanguageReducer = languageSlice.reducer;
