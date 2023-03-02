import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { UserProfile } from "../../modules/user-module";
import { useAppSelector } from "../../store";
import { useParams } from "react-router-dom";
import { CollectionItemsWidget, CollectionWidget } from "../../modules/collection-module";

export function CollectionPage() {
  const { t } = useTranslation("headings");

  const { userId, isAdmin } = useAppSelector((store) => store.AuthReducer);
  const { collectionId } = useParams();

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <CollectionWidget
          authUser={userId}
          isAuthUserAdmin={isAdmin}
          collectionId={collectionId || ""}
        />
      </Box>
      <CollectionItemsWidget
        authUser={userId}
        isAuthUserAdmin={isAdmin}
        collectionId={collectionId || ""}
      />
    </Box>
  );
}
