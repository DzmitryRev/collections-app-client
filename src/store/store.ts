import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "../app-module/theme/themeSlice";

export const store = configureStore({
  reducer: {
    ThemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
