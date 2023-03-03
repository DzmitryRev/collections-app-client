import React from "react";
import { ErrorAlert } from "./ErrorAlert";

export function AccessError() {
  return <ErrorAlert message={"Нет доступа"} />;
}
