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
    setIsError: (state, { payload }: PayloadAction<boolean>) => {
      state.isError = payload;
    },
  },
});

export const { setIsError } = connectionErrorSlice.actions;

export const ConnectionErrorReducer = connectionErrorSlice.reducer;
