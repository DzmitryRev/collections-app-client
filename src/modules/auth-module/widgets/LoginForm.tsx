import React from "react";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CustomLink, LightTypo } from "../../../shared/components";
import { AuthFormInnerContainer, AuthFormPasswordInput, AuthValidatedInput } from "../components";
import { loginInitialValue, loginValidationSchema } from "../utils/LoginValidation";
import { FORGOT_PASSWORD, MAIN, REGISTRATION } from "../../../shared/constants/paths";
import AuthApiErrorsList from "./AuthApiErrorBlock";
import { useAuth } from "../hooks/useAuth";
import { loginThunk } from "../store/thunks/login.thunk";
import { LoadingButton } from "@mui/lab";

export function LoginForm() {
  const { t } = useTranslation(["auth", "global"]);
  const { loading, errors, dispatch, navigate } = useAuth();

  const formik = useFormik({
    initialValues: loginInitialValue,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      dispatch(loginThunk(values))
        .unwrap()
        .then(() => {
          navigate(MAIN);
        });
    },
  });

  return (
    <Box>
      <AuthFormInnerContainer>
        <LightTypo marginBottom={1}>
          {t("havent_account")} <CustomLink to={REGISTRATION}>{t("register")}</CustomLink>
        </LightTypo>

        <Box marginBottom={2}>
          <form onSubmit={formik.handleSubmit}>
            <AuthValidatedInput
              label={"email"}
              touched={formik.touched.email}
              errors={formik.errors.email}
              onChange={formik.handleChange}
            />
            <AuthFormPasswordInput
              touched={formik.touched.password}
              errors={formik.errors.password}
              fullWidth
              onChange={formik.handleChange}
            />

            <LightTypo sx={{ mb: 2 }}>
              <CustomLink to={FORGOT_PASSWORD}>{t("forgot_password")}</CustomLink>
            </LightTypo>

            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <LoadingButton
                type="submit"
                loading={loading}
                disabled={loading}
                loadingPosition="start"
                startIcon={<AccountCircleIcon />}
                variant="contained"
              >
                {t("login", { ns: "global" })}
              </LoadingButton>
            </Box>
          </form>
        </Box>
        <AuthApiErrorsList errors={errors} />
      </AuthFormInnerContainer>
    </Box>
  );
}
