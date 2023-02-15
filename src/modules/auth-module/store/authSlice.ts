import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./thunks/login.thunk";
import { registrationThunk } from "./thunks/registration.thunk";

interface AuthState {
  isAuth: boolean;
  userId: string;
  loading: boolean;
  errors: string[];
  token: string | null;
}

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;

const initialState: AuthState = {
  isAuth: false,
  userId: "",
  token,
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
      state.loading = false;
    });
    builder.addCase(loginThunk.rejected, (state, { payload }) => {
      state.loading = false;
      if (payload) {
        state.errors = payload;
      }
    });
  },
});

export const { cleanErrors } = authSlice.actions;

export const AuthReducer = authSlice.reducer;
