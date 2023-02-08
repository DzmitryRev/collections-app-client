import React from "react";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import Header from "./widgets/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ maxWidth: "1198px", m: "0 auto" }}>
        <Header />
        {/**
         * TODO:
         * router outlet
         * footer
         */}
      </Box>
    </>
  );
}

export default App;
