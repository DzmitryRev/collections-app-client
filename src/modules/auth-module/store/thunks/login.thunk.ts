import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginBodyType, loginRequest, LoginResType } from "../../api";
import { createAuthApiError } from "./helpers";
import { AuthRejectValueType, AuthErrorType } from "./types";

export const loginThunk = createAsyncThunk<
  LoginResType | undefined,
  LoginBodyType,
  AuthRejectValueType
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const { data } = await loginRequest({ email, password });
    return data;
  } catch (error) {
    if (axios.isAxiosError<AuthErrorType>(error)) {
      return rejectWithValue(createAuthApiError(error?.response?.data));
    }
  }
});
