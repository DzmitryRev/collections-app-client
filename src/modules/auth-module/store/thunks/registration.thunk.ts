import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegistrationBodyType, registrationRequest } from "../../api/api";
import { createAuthApiError } from "./helpers";
import { AuthErrorType } from "./types";

export const registrationThunk = createAsyncThunk<
  {},
  RegistrationBodyType,
  {
    rejectValue: string[];
  }
>(
  "auth/registration",
  async ({ name, email, password }: RegistrationBodyType, { rejectWithValue }) => {
    try {
      const res = await registrationRequest({ name, email, password });
      return res.data;
    } catch (error) {
      if (axios.isAxiosError<AuthErrorType>(error)) {
        return rejectWithValue(createAuthApiError(error?.response?.data));
      }
    }
  }
);
