import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConnectionErrorState {
  isError: boolean;
}

const initialState: ConnectionErrorState = {
  isError: false,
};

export const connectionErrorSlice = createSlice({
  name: "connectionError",
  initialState,
  reducers: {
    setConnectionError: (state, { payload }: PayloadAction<boolean>) => {
      state.isError = payload;
    },
  },
});

export const { setConnectionError } = connectionErrorSlice.actions;

export const ConnectionErrorReducer = connectionErrorSlice.reducer;
