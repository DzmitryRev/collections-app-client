import React from "react";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CustomLink, LightTypo } from "../../../shared/components";
import {
  registrationInitialValue,
  registrationValidationSchema,
} from "../utils/RegistrationValidation";
import { AuthFormInnerContainer, AuthValidatedInput, AuthFormPasswordInput } from "../components";
import { CONFIRM_EMAIL, LOGIN } from "../../../shared/constants/paths";
import AuthApiErrorsList from "./AuthApiErrorBlock";
import { useAuth } from "../hooks/useAuth";
import { registrationThunk } from "../store/thunks/registration.thunk";
import { LoadingButton } from "@mui/lab";

export default function RegistrationForm() {
  const { t } = useTranslation(["global", "auth"]);
  const { loading, errors, dispatch, navigate } = useAuth();

  const formik = useFormik({
    initialValues: registrationInitialValue,
    validationSchema: registrationValidationSchema,
    onSubmit: (values) => {
      dispatch(registrationThunk(values))
        .unwrap()
        .then(() => {
          navigate(CONFIRM_EMAIL, {
            state: { access: true },
          });
        });
    },
  });

  return (
    <Box>
      <AuthFormInnerContainer>
        <LightTypo marginBottom={1}>
          {t("have_account", { ns: "auth" })} <CustomLink to={LOGIN}>{t("login")}</CustomLink>
        </LightTypo>
        <Box marginBottom={2}>
          <form onSubmit={formik.handleSubmit}>
            <AuthValidatedInput
              label={"name"}
              name="name"
              touched={formik.touched.name}
              errors={formik.errors.name}
              onChange={formik.handleChange}
            />
            <AuthValidatedInput
              label={"email"}
              name="email"
              touched={formik.touched.email}
              errors={formik.errors.email}
              onChange={formik.handleChange}
            />
            <AuthFormPasswordInput
              sx={{ mb: 1 }}
              touched={formik.touched.password}
              errors={formik.errors.password}
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
                {t("registration")}
              </LoadingButton>
            </Box>
          </form>
        </Box>
        <AuthApiErrorsList errors={errors} />
      </AuthFormInnerContainer>
    </Box>
  );
}
