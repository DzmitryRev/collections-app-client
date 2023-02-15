import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CONFIRM_EMAIL,
  EMAIL_CONFIRMED,
  LOGIN,
  NEW_PASSWORD_SENT,
  PASSWORD_CHANHED,
  REGISTRATION,
  REJECTED_CONFIRMATION,
} from "../../shared/constants/paths";
import {
  ConfirmationErrorPage,
  ConfirmEmailPage,
  EmailConfirmedPage,
  LoginPage,
  NewPasswordSentPage,
  PasswordChangedPage,
  RegistrationPage,
} from "../pages";

export default function Router() {
  return (
    <Routes>
      <Route path={CONFIRM_EMAIL} element={<ConfirmEmailPage />} />
      <Route path={EMAIL_CONFIRMED} element={<EmailConfirmedPage />} />
      <Route path={REJECTED_CONFIRMATION} element={<ConfirmationErrorPage />} />
      <Route path={NEW_PASSWORD_SENT} element={<NewPasswordSentPage />} />
      <Route path={PASSWORD_CHANHED} element={<PasswordChangedPage />} />
      <Route path={REGISTRATION} element={<RegistrationPage />} />
      <Route path={LOGIN} element={<LoginPage />} />
    </Routes>
  );
}
