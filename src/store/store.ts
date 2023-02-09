import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "../modules/theme-module";

export const store = configureStore({
  reducer: {
    ThemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
