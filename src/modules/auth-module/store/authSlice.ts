import { createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN_STORAGE } from "../../../shared/constants/localStorage";
import { checkAuthThunk } from "./thunks/checkAuth.thunk";
import { loginThunk } from "./thunks/login.thunk";
import { logoutThunk } from "./thunks/logout.thunk";
import { registrationThunk } from "./thunks/registration.thunk";

interface AuthState {
  isAuth: boolean;
  userId: string;
  loading: boolean;
  errors: string[];
}

const initialState: AuthState = {
  isAuth: false,
  userId: "",
  loading: false,
  errors: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    cleanErrors(store) {
      store.errors = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registrationThunk.pending, (state) => {
      state.loading = true;
      state.errors = [];
    });
    builder.addCase(registrationThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
    });
    builder.addCase(registrationThunk.rejected, (state, { payload }) => {
      state.loading = false;
      if (payload) {
        state.errors = payload;
      }
    });
    builder.addCase(loginThunk.pending, (state) => {
      state.loading = true;
      state.errors = [];
    });
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      if (payload) {
        state.loading = false;
        state.isAuth = true;
        localStorage.setItem(ACCESS_TOKEN_STORAGE, payload.accessToken);
        state.userId = payload.userId;
      }
    });
    builder.addCase(loginThunk.rejected, (state, { payload }) => {
      state.loading = false;
      if (payload) {
        state.errors = payload;
      }
    });
    builder.addCase(checkAuthThunk.fulfilled, (state, { payload }) => {
      if (payload) {
        state.isAuth = true;
        localStorage.setItem(ACCESS_TOKEN_STORAGE, payload.accessToken);
        state.userId = payload.userId;
      }
    });
    builder.addCase(logoutThunk.fulfilled, (state, { payload }) => {
      state.isAuth = false;
      localStorage.removeItem(ACCESS_TOKEN_STORAGE);
      state.userId = "";
    });
  },
});

export const { cleanErrors } = authSlice.actions;

export const AuthReducer = authSlice.reducer;
