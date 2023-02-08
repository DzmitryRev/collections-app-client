import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ThemeProvider from "./theme/ThemeProvider";
import { store } from "../store/store";
import App from "./App";

export default function AppWithProviders() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}
