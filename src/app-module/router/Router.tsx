import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  COLLECTION_ITEM,
  COLLECTION_PAGE,
  COLLECTION_PAGE_SETTINGS,
  CONFIRM_EMAIL,
  EMAIL_CONFIRMED,
  FORGOT_PASSWORD,
  LOGIN,
  NEW_PASSWORD_SENT,
  PASSWORD_CHANHED,
  REGISTRATION,
  REJECTED_CONFIRMATION,
  SETTINGS,
  USER,
} from "../../shared/constants/paths";
import { ProtectedPageByParams } from "../Hocs/ProtectedPageByParams";
import { ProtectedPageByState } from "../Hocs/ProtectedPageByState";
import { RedirectIfAuth } from "../Hocs/RedirectIfAuth";
import { RedirectIfUnauth } from "../Hocs/RedirectIfUnauth";
import {
  ConfirmationErrorPage,
  ConfirmEmailPage,
  EmailConfirmedPage,
  LoginPage,
  NewPasswordSentPage,
  PasswordChangedPage,
  RegistrationPage,
  ForgotPassword,
  CollectionPage,
  CollectionSettingsPage,
  MainPage
} from "../pages";
import { CollectionItemPage } from "../pages/CollectionItemPage";
import { UserProfilePage } from "../pages/UserProfilePage";
import { UserSettingsPage } from "../pages/UserSettingsPage";

export default function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />} />

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
      <Route
        path={SETTINGS}
        element={
          <RedirectIfUnauth>
            <UserSettingsPage />
          </RedirectIfUnauth>
        }
      />
      <Route path={USER} element={<UserProfilePage />} />
      <Route path={COLLECTION_PAGE} element={<CollectionPage />} />
      <Route
        path={COLLECTION_PAGE_SETTINGS}
        element={
          <RedirectIfUnauth>
            <CollectionSettingsPage />
          </RedirectIfUnauth>
        }
      />
      <Route path={COLLECTION_ITEM} element={<CollectionItemPage />} />
    </Routes>
  );
}
