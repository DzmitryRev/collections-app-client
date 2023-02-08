import React, { PropsWithChildren, useMemo } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useAppSelector } from "../../store/hooks";

export default function ThemeProviderCustom({ children }: PropsWithChildren) {
  const mode = useAppSelector((state) => state.ThemeReducer.mode);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
