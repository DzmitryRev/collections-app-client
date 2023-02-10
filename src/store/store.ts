import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "../modules/theme-module";
import { LanguageReducer } from "../modules/langualge-module";

export const store = configureStore({
  reducer: {
    ThemeReducer,
    LanguageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
