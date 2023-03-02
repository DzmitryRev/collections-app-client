import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { UserProfile } from "../../modules/user-module";
import { useAppSelector } from "../../store";
import { useParams } from "react-router-dom";
import { CollectionsWidget } from "../../modules/collection-module";

export function UserProfilePage() {
  const { t } = useTranslation("headings");

  const { userId, isAdmin } = useAppSelector((store) => store.AuthReducer);
  const { id } = useParams();

  return (
    <Box>
      <UserProfile authUser={userId} isAuthUserAdmin={isAdmin} userId={id || ""} />
      <CollectionsWidget authUser={userId} isAuthUserAdmin={isAdmin} userId={id || ""} />
    </Box>
  );
}
