import { createSlice } from "@reduxjs/toolkit";

type ThemeModes = "dark" | "light";

interface ThemeState {
  mode: ThemeModes;
}

const savedTheme = (localStorage.getItem("themeMode") as ThemeModes) || "light";

const initialState: ThemeState = {
  mode: savedTheme,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
