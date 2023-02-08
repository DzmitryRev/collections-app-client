import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";

interface AuthState {
  isAuth: boolean;
  userId: string;
  loading: boolean;
  error: null;
  token: string | null;
  success: boolean;
}

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;

const initialState: AuthState = {
  isAuth: false,
  userId: "",
  token,
  loading: false,
  error: null,
  success: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setIsAuth: (state, action: PayloadAction<boolean>) => {
    //   state.isAuth = action.payload;
    // },
    // setUserId: (state, action: PayloadAction<string>) => {
    //   state.userId = action.payload;
    // },
  },
  extraReducers: {
    // [loginThunk.pending]: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // [loginThunk.fulfilled]: (state, { payload }) => {
    //   state.loading = false;
    //   state.userId = payload;
    //   state.token = payload.userToken;
    // },
    // [loginThunk.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.error = payload;
    // },
    // [registrationThunk.pending]: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // [registrationThunk.fulfilled]: (state, { payload }) => {
    //   state.loading = false;
    //   //   state.userId = payload;
    //   //   state.token = payload.userToken;
    // },
    // [registrationThunk.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.error = payload;
    // },
  },
});

export const { setIsAuth, setUserId } = authSlice.actions;

// export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
