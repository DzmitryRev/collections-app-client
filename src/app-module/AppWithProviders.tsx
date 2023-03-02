import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { store } from "../store/store";
import App from "./App";
import { ThemeProvider } from "../modules/theme-module";

export default function AppWithProviders() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <App />
          </LocalizationProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}
