import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "../modules/theme-module";
import { AuthReducer } from "../modules/auth-module";
import { LanguageReducer } from "../modules/langualge-module";
import { ConnectionErrorReducer } from "../modules/connection-error-module";

export const store = configureStore({
  reducer: {
    ThemeReducer,
    LanguageReducer,
    AuthReducer,
    ConnectionErrorReducer,
  },
});

export const dispatch = store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
