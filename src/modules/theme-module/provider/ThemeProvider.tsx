import React, { PropsWithChildren, useMemo } from "react";
import { ThemeProvider as MuiThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import { rootFontsStyle } from "../themes/rootFontsTheme";

export function ThemeProvider({ children }: PropsWithChildren) {
  const mode = useAppSelector((state) => state.ThemeReducer.mode);

  const theme = useMemo(
    () =>
      createTheme({
        ...rootFontsStyle,
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
