import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";
import App from "./App";
import { ThemeProviderCustom } from "../modules/theme-module";

export default function AppWithProviders() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProviderCustom>
          <App />
        </ThemeProviderCustom>
      </Provider>
    </BrowserRouter>
  );
}
