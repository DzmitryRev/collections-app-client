import React from "react";
import { Box } from "@mui/material";
import { UserSettings } from "../../modules/user-module";
import { useAppSelector } from "../../store";

export function UserSettingsPage() {
  const { userId } = useAppSelector((store) => store.AuthReducer);
  return (
    <Box>
      <UserSettings userId={userId} />
    </Box>
  );
}
