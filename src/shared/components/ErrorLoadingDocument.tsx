import React from "react";
import { ErrorAlert } from "./ErrorAlert";

export function ErrorLoadingDocument() {
  return <ErrorAlert message={"Не удалось загрузить документ"} />;
}
