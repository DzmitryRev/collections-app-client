import { GlobalStyles as MuiGlobalStyles } from "@mui/material";

const cursorDefault = { cursor: "default" };

export const globalStyles = {
  p: { ...cursorDefault },
  h1: { ...cursorDefault },
  h2: { ...cursorDefault },
  h3: { ...cursorDefault },
  h4: { ...cursorDefault },
  h5: { ...cursorDefault },
  h6: { ...cursorDefault },
};

export const GlobaslStyles = <MuiGlobalStyles styles={globalStyles} />;
