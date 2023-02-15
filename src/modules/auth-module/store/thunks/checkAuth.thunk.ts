import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkAuthRequest, LoginResType } from "../../api";

export const checkAuthThunk = createAsyncThunk<LoginResType | undefined, {}>(
  "auth/checkAuth",
  async () => {
    const { data } = await checkAuthRequest();
    return data;
  }
);
