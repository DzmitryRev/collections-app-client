import React from "react";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ChildrenOrSpinner, CustomLink, LightTypo } from "../../../shared/components";
import {
  AuthFormInnerContainer,
  AuthFormPasswordInput,
  AuthSubmitButton,
  AuthValidatedInput,
} from "../components";
import { loginInitialValue, loginValidationSchema } from "../utils/LoginValidation";
import { REGISTRATION } from "../../../shared/constants/paths";
import AuthApiErrorsList from "./AuthApiErrorBlock";
import { useAuth } from "../hooks";
import { loginThunk } from "../store";

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
          navigate("/");
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
              <CustomLink to="/registration">{t("forgot_password")}</CustomLink>
            </LightTypo>

            <ChildrenOrSpinner sx={{ textAlign: "center" }} condition={loading}>
              <AuthSubmitButton>{t("login", { ns: "global" })}</AuthSubmitButton>
            </ChildrenOrSpinner>
          </form>
        </Box>
        <AuthApiErrorsList errors={errors} />
      </AuthFormInnerContainer>
    </Box>
  );
}
