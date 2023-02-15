import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CONFIRM_EMAIL,
  EMAIL_CONFIRMED,
  LOGIN,
  REGISTRATION,
  REJECTED_CONFIRMATION,
} from "../../shared/constants/paths";
import ConfirmationErrorPage from "../pages/ConfirmationErrorPage";
import ConfirmEmailPage from "../pages/ConfirmEmailPage";
import EmailConfirmedPage from "../pages/EmailConfirmedPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

export default function Router() {
  return (
    <Routes>
      <Route path={CONFIRM_EMAIL} element={<ConfirmEmailPage />} />
      <Route path={EMAIL_CONFIRMED} element={<EmailConfirmedPage />} />
      <Route path={REJECTED_CONFIRMATION} element={<ConfirmationErrorPage />} />
      <Route path={REGISTRATION} element={<RegistrationPage />} />
      <Route path={LOGIN} element={<LoginPage />} />
    </Routes>
  );
}
