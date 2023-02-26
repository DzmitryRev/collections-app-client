import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../../shared/api";
import { ACCESS_TOKEN_STORAGE } from "../../../shared/constants/localStorage";
import { checkAuthThunk } from "./thunks/checkAuth.thunk";
import { forgotPasswordThunk } from "./thunks/forgotPassword.thunk";
import { loginThunk } from "./thunks/login.thunk";
import { logoutThunk } from "./thunks/logout.thunk";
import { registrationThunk } from "./thunks/registration.thunk";

interface AuthState {
  userId: string;
  isAdmin: boolean;
  loading: boolean;
  errors: string[];
}

const initialState: AuthState = {
  userId: "",
  isAdmin: false,
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
    logout(store) {
      store.userId = "";
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
        localStorage.setItem(ACCESS_TOKEN_STORAGE, payload.accessToken);
        state.userId = payload.userId;
        state.isAdmin = payload.isAdmin;
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
        localStorage.setItem(ACCESS_TOKEN_STORAGE, payload.accessToken);
        state.userId = payload.userId;
        state.isAdmin = payload.isAdmin;
      }
    });
    builder.addCase(logoutThunk.fulfilled, (state, { payload }) => {
      localStorage.removeItem(ACCESS_TOKEN_STORAGE);
      state.userId = "";
    });
    builder.addCase(forgotPasswordThunk.pending, (state) => {
      state.loading = true;
      state.errors = [];
    });
    builder.addCase(forgotPasswordThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
    });
    builder.addCase(forgotPasswordThunk.rejected, (state, { payload }) => {
      state.loading = false;
      if (payload) {
        state.errors = payload;
      }
    });
  },
});

export const { cleanErrors, logout } = authSlice.actions;

export const AuthReducer = authSlice.reducer;
