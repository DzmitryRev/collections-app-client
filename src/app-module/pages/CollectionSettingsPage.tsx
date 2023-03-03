import React from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "../../store";
import { useParams } from "react-router-dom";
import { CollectionSettingsWidget } from "../../modules/collection-module";

export function CollectionSettingsPage() {
  const { userId } = useAppSelector((store) => store.AuthReducer);
  const { collectionId } = useParams();

  return (
    <Box>
      <CollectionSettingsWidget collectionId={collectionId || ""} authUser={userId} />
    </Box>
  );
}
