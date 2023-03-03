import React from "react";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthFormInnerContainer, AuthValidatedInput } from "../components";
import { NEW_PASSWORD_SENT } from "../../../shared/constants/paths";
import AuthApiErrorsList from "./AuthApiErrorBlock";
import { useAuth } from "../hooks/useAuth";
import {
  forgotPasswordInitialValue,
  forgotPasswordValidationSchema,
} from "../utils/ForgotPasswordValidation";
import { forgotPasswordThunk } from "../store/thunks/forgotPassword.thunk";
import { LoadingButton } from "@mui/lab";

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
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <LoadingButton
                type="submit"
                loading={loading}
                disabled={loading}
                loadingPosition="start"
                startIcon={<AccountCircleIcon />}
                variant="contained"
              >
                {t("confirm")}
              </LoadingButton>
            </Box>
          </form>
        </Box>
        <AuthApiErrorsList errors={errors} />
      </AuthFormInnerContainer>
    </Box>
  );
}
