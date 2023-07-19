import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import { CssBaseline, GlobalStyles } from "@mui/material";
import Router from "./router/Router";
import Header from "./widgets/Header";
import { useCheckAuth } from "../modules/auth-module";
import { UserMenu, UserProfile, UserSettings } from "../modules/user-module";
import { ConnectionErrorAlert } from "./widgets/ConnectionErrorAlert";
import "./api/interceptors/auth.interceptor";
import "./api/interceptors/connection.interceptor";

function App() {
  useEffect(() => {
    useCheckAuth();
  }, []);
  return (
    <>
      <Box
        sx={{
          maxWidth: "1198px",
          minHeight: "100vh",
          m: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <ConnectionErrorAlert />
        <Box sx={{ px: "5px", pt: "30px", pb: "20px", flex: "1 1 auto" }}>
          <Router />
        </Box>
        {/* <Box sx={{ background: "red" }}>footer</Box> */}
      </Box>
    </>
  );
}

export default App;
