import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegistrationBodyType, registrationRequest } from "../../api";
import { createAuthApiError } from "./helpers";
import { AuthRejectValueType, AuthErrorType } from "./types";
import { MessageResType } from "../../../../shared/api";

export const registrationThunk = createAsyncThunk<
  MessageResType | undefined,
  RegistrationBodyType,
  AuthRejectValueType
>(
  "auth/registration",
  async ({ name, email, password }: RegistrationBodyType, { rejectWithValue }) => {
    try {
      const { data } = await registrationRequest({ name, email, password });
      return data;
    } catch (error) {
      if (axios.isAxiosError<AuthErrorType>(error)) {
        return rejectWithValue(createAuthApiError(error?.response?.data));
      }
    }
  }
);
