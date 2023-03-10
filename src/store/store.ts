import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "../modules/theme-module";
import { AuthReducer } from "../modules/auth-module";
import { LanguageReducer } from "../modules/langualge-module";
import { userQuery } from "../modules/user-module";
import { collectionsQuery } from "../modules/collection-module";
import { ConnectionErrorReducer } from "../app-module/store/slices/connectionErrorSlice/connectionErrorSlice";

export const store = configureStore({
  reducer: {
    ThemeReducer,
    LanguageReducer,
    AuthReducer,
    ConnectionErrorReducer,
    [userQuery.reducerPath]: userQuery.reducer,
    [collectionsQuery.reducerPath]: collectionsQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userQuery.middleware, collectionsQuery.middleware),
});

export const dispatch = store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
