import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { forgotPasswordRequest, LoginBodyType, loginRequest, LoginResType } from "../../api";
import { createAuthApiError } from "./helpers";
import { AuthRejectValueType, AuthErrorType } from "./types";
import { MessageResType } from "../../../../shared/api";

export const forgotPasswordThunk = createAsyncThunk<
  MessageResType | undefined,
  { email: string },
  AuthRejectValueType
>("auth/forgotPassword", async ({ email }, { rejectWithValue }) => {
  try {
    const { data } = await forgotPasswordRequest({ email });
    return data;
  } catch (error) {
    if (axios.isAxiosError<AuthErrorType>(error)) {
      return rejectWithValue(createAuthApiError(error?.response?.data));
    }
  }
});
