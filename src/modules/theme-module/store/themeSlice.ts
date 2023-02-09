import { createSlice } from "@reduxjs/toolkit";

type ThemeModes = "dark" | "light";

interface ThemeState {
  mode: ThemeModes;
}

const THEME_LS_NAME = "themeMode";

const savedTheme = (localStorage.getItem(THEME_LS_NAME) as ThemeModes) || "light";

const initialState: ThemeState = {
  mode: savedTheme,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem(THEME_LS_NAME, state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const ThemeReducer = themeSlice.reducer;
