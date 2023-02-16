import React from "react";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ChildrenOrSpinner } from "../../../shared/components";
import { AuthFormInnerContainer, AuthSubmitButton, AuthValidatedInput } from "../components";
import { NEW_PASSWORD_SENT } from "../../../shared/constants/paths";
import AuthApiErrorsList from "./AuthApiErrorBlock";
import { useAuth } from "../hooks/useAuth";
import {
  forgotPasswordInitialValue,
  forgotPasswordValidationSchema,
} from "../utils/ForgotPasswordValidation";
import { forgotPasswordThunk } from "../store/thunks/forgotPassword.thunk";

export function ForgotPasswordForm() {
  const { t } = useTranslation("global");
  const { loading, errors, dispatch, navigate } = useAuth();

  const formik = useFormik({
    initialValues: forgotPasswordInitialValue,
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: (values) => {
      dispatch(forgotPasswordThunk(values))
        .unwrap()
        .then(() => {
          navigate(NEW_PASSWORD_SENT, {
            state: { access: true },
          });
        });
    },
  });

  return (
    <Box>
      <AuthFormInnerContainer>
        <Box marginBottom={2}>
          <form onSubmit={formik.handleSubmit}>
            <AuthValidatedInput
              label={"email"}
              touched={formik.touched.email}
              errors={formik.errors.email}
              onChange={formik.handleChange}
            />
            <ChildrenOrSpinner sx={{ textAlign: "center" }} condition={loading}>
              <AuthSubmitButton>{t("confirm")}</AuthSubmitButton>
            </ChildrenOrSpinner>
          </form>
        </Box>
        <AuthApiErrorsList errors={errors} />
      </AuthFormInnerContainer>
    </Box>
  );
}
