import React from "react";
import { SecondaryHeadingTypo, Spinner } from "../../../shared/components";
import { useGetNewCollectionsQuery } from "../store/collectionsQuery";
import { CollectionContainer } from "../components/CollectionContainer";
import { CollectionsList } from "../components/CollectionsList";
import { useTranslation } from "react-i18next";

export function NewCollectionsWidget() {
  const { t } = useTranslation("collections");
  const { data, isLoading } = useGetNewCollectionsQuery({});

  return (
    <CollectionContainer>
      <SecondaryHeadingTypo sx={{ mb: 2, textAlign: "center" }}>
        {t("new_collections")}
      </SecondaryHeadingTypo>
      {isLoading ? (
        <Spinner />
      ) : (
        <CollectionsList collections={data?.collections || []} accessToCheck={false} />
      )}
    </CollectionContainer>
  );
}
