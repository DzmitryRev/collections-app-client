import React from "react";
import { Box } from "@mui/material";
import RegistrationForm from "../../modules/auth-module/widgets/RegistrationForm";
import { SecondaryHeadingTypo } from "../../shared/components";
import { useTranslation } from "react-i18next";
import { UserProfile, UserSettings } from "../../modules/user-module";
import { useAppSelector } from "../../store";
import { useParams } from "react-router-dom";
import axios from "axios";

export function UserSettingsPage() {
  const { t } = useTranslation("headings");

  const { userId } = useAppSelector((store) => store.AuthReducer);
  return (
    <Box>
      <UserSettings userId={userId} />
    </Box>
  );
}
