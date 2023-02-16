import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CONFIRM_EMAIL,
  EMAIL_CONFIRMED,
  FORGOT_PASSWORD,
  LOGIN,
  NEW_PASSWORD_SENT,
  PASSWORD_CHANHED,
  REGISTRATION,
  REJECTED_CONFIRMATION,
} from "../../shared/constants/paths";
import { ProtectedPageByParams } from "../Hocs/ProtectedPageByParams";
import { ProtectedPageByState } from "../Hocs/ProtectedPageByState";
import { RedirectIfAuth } from "../Hocs/RedirectIfAuth";
import {
  ConfirmationErrorPage,
  ConfirmEmailPage,
  EmailConfirmedPage,
  LoginPage,
  NewPasswordSentPage,
  PasswordChangedPage,
  RegistrationPage,
  ForgotPassword,
} from "../pages";

export default function Router() {
  return (
    <Routes>
      <Route
        path={CONFIRM_EMAIL}
        element={
          <ProtectedPageByState>
            <ConfirmEmailPage />
          </ProtectedPageByState>
        }
      />
      <Route
        path={EMAIL_CONFIRMED}
        element={
          <ProtectedPageByParams>
            <EmailConfirmedPage />
          </ProtectedPageByParams>
        }
      />
      <Route
        path={REJECTED_CONFIRMATION}
        element={
          <ProtectedPageByParams>
            <ConfirmationErrorPage />
          </ProtectedPageByParams>
        }
      />
      <Route
        path={PASSWORD_CHANHED}
        element={
          <ProtectedPageByParams>
            <PasswordChangedPage />
          </ProtectedPageByParams>
        }
      />
      <Route
        path={NEW_PASSWORD_SENT}
        element={
          <ProtectedPageByState>
            <NewPasswordSentPage />
          </ProtectedPageByState>
        }
      />

      <Route
        path={REGISTRATION}
        element={
          <RedirectIfAuth>
            <RegistrationPage />
          </RedirectIfAuth>
        }
      />
      <Route
        path={LOGIN}
        element={
          <RedirectIfAuth>
            <LoginPage />
          </RedirectIfAuth>
        }
      />
      <Route
        path={FORGOT_PASSWORD}
        element={
          <RedirectIfAuth>
            <ForgotPassword />
          </RedirectIfAuth>
        }
      />
    </Routes>
  );
}
