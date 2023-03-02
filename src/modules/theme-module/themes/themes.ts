import { createTheme } from "@mui/material";
import { rootFontsStyle } from "./otherSettings/rootFontsTheme";

export const darkTheme = createTheme({
  ...rootFontsStyle,
  palette: {
    mode: "dark",
    error: {
      main: "#ec6565",
    },
  },
});

export const lightTheme = createTheme({
  ...rootFontsStyle,
  palette: {
    mode: "light",
    background: {
      default: "#e8eddf",
    },
  },
});
