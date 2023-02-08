import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

export default function AppWithProviders() {
  return (
    <BrowserRouter>
      {/**
       * TODO:
       * theme provider
       * store provider
       */}
      <App />
    </BrowserRouter>
  );
}
