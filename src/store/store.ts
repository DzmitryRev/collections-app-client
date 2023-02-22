import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "../modules/theme-module";
import { AuthReducer } from "../modules/auth-module";
import { LanguageReducer } from "../modules/langualge-module";
import { ConnectionErrorReducer } from "../modules/connection-error-module";
import { userQuery } from "../modules/user-module";

export const store = configureStore({
  reducer: {
    ThemeReducer,
    LanguageReducer,
    AuthReducer,
    ConnectionErrorReducer,
    [userQuery.reducerPath]: userQuery.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userQuery.middleware),
});

export const dispatch = store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
