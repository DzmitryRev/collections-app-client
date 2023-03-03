import React from "react";
import { useAppSelector } from "../../store";
import { useParams } from "react-router-dom";
import { CollectionItemWidget } from "../../modules/collection-module";

export function CollectionItemPage() {
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
