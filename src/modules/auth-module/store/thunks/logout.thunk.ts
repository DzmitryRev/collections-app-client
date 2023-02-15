import { createAsyncThunk } from "@reduxjs/toolkit";
import { logoutRequest } from "../../api";
import { AuthRejectValueType } from "./types";
import { MessageResType } from "../../../../shared/api";

export const logoutThunk = createAsyncThunk<MessageResType | undefined, {}, AuthRejectValueType>(
  "auth/logout",
  async ({}) => {
    const { data } = await logoutRequest();
    return data;
  }
);
