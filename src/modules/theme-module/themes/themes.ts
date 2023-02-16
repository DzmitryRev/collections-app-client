import { createTheme } from "@mui/material";
import { rootFontsStyle } from "./otherSettings/rootFontsTheme";

export const darkTheme = createTheme({
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

export const lightTheme = createTheme({
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
