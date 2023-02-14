import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { useTranslation } from "react-i18next";

export type ValidatedInputPropsType = {
  label: string;
  touched: boolean | undefined;
  errors: string | undefined;
} & TextFieldProps;

export function ValidatedInput({ label, touched, errors, ...args }: ValidatedInputPropsType) {
  const { t } = useTranslation(["global", "auth"]);
  return (
    <div>
      <TextField
        label={t(label)}
        name={label.toLowerCase()}
        error={touched && !!errors}
        helperText={(touched && t(errors || "", { ns: "auth" })) || " "}
        {...args}
      />
    </div>
  );
}
