import React from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store";
import { useParams } from "react-router-dom";
import { CollectionItemWidget } from "../../modules/collection-module";

export function CollectionItemPage() {
  const { t } = useTranslation("headings");

  const { userId, isAdmin } = useAppSelector((store) => store.AuthReducer);
  const { collectionItemId } = useParams();

  return (
    <CollectionItemWidget
      authUser={userId}
      isAuthUserAdmin={isAdmin}
      collectionItemId={collectionItemId || ""}
    />
  );
}
