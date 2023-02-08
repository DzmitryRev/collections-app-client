import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginForm } from "../../modules/auth-module";

export default function Router() {
  return (
    <Routes>
      {/**
       * Routes
       */}
       <Route path="login" element={<LoginForm />} />
    </Routes>
  );
}
