import React, { useState } from "react";
import {
  FilledInput,
  FormControl,
  FormControlProps,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useTranslation } from "react-i18next";

interface IPasswordInputProps extends FormControlProps {
  errors: string | undefined;
  touched: boolean | undefined;
}

export function AuthFormPasswordInput({ errors, touched, ...args }: IPasswordInputProps) {
  const { t } = useTranslation(["global", "auth"]);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl variant="filled" fullWidth error={touched && !!errors} {...args}>
      <InputLabel htmlFor="filled-adornment-password">{t("password")}</InputLabel>

      <FilledInput
        name="password"
        id="filled-adornment-password"
        type={showPassword ? "text" : "password"}
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText>{(touched && t(errors || "", { ns: "auth" })) || " "}</FormHelperText>
    </FormControl>
  );
}
