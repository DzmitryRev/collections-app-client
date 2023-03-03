import React from "react";
import { Alert } from "@mui/material";

interface IErrorAlert {
  message: string;
}

export function ErrorAlert({ message }: IErrorAlert) {
  return (
    <Alert sx={{ position: "fixed", bottom: "15px", right: "15px" }} severity="error">
      {message}
    </Alert>
  );
}
