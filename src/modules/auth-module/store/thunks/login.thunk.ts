import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginBodyType, loginRequest } from "../../api/api";
import { createAuthApiError } from "./helpers";
import { AuthErrorType } from "./types";

export const loginThunk = createAsyncThunk<
  {},
  LoginBodyType,
  {
    rejectValue: string[];
  }
>("auth/login", async ({ email, password }: LoginBodyType, { rejectWithValue }) => {
  try {
    const res = await loginRequest({ email, password });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError<AuthErrorType>(error)) {
      return rejectWithValue(createAuthApiError(error?.response?.data));
    }
  }
});
