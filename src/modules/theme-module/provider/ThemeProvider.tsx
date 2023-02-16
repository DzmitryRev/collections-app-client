import React, { PropsWithChildren } from "react";
import { ThemeProvider as MuiThemeProvider } from "@emotion/react";
import { useAppSelector } from "../../../store/hooks";
import { darkTheme, lightTheme } from "../themes/themes";

export function ThemeProvider({ children }: PropsWithChildren) {
  const mode = useAppSelector((state) => state.ThemeReducer.mode);

  return (
    <MuiThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      {children}
    </MuiThemeProvider>
  );
}
