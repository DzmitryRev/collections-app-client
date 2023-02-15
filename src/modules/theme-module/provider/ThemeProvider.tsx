import React, { PropsWithChildren, useMemo } from "react";
import { ThemeProvider as MuiThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import { rootFontsStyle } from "../themes/rootFontsTheme";

const darkTheme = createTheme({
  ...rootFontsStyle,
  palette: {
    mode: "dark",
    background: {
      default: "#1B2021",
    },
    primary: {
      main: "#33ab9f",
    },
    error: {
      main: "#ec6565",
    },
  },
});

const lightTheme = createTheme({
  ...rootFontsStyle,
  palette: {
    mode: "light",
    background: {
      default: "#f6f8fc",
    },
    primary: {
      main: "#009688",
    },
  },
});

export function ThemeProvider({ children }: PropsWithChildren) {
  const mode = useAppSelector((state) => state.ThemeReducer.mode);

  return (
    <MuiThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      {children}
    </MuiThemeProvider>
  );
}
