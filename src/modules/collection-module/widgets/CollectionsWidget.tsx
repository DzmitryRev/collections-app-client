import React, { useState } from "react";
import { Box, Pagination } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  AccessError,
  BodyTypo,
  Button,
  ErrorLoadingDocument,
  LightTypo,
  Modal,
  SecondaryHeadingTypo,
} from "../../../shared/components";
import { CollectionsList } from "../components/CollectionsList";
import {
  useDeleteCollectionsMutation,
  useGetUserCollectionsQuery,
} from "../store/collectionsQuery";
import { AddCollectionForm } from "./AddCollectionForm";
import { useModal } from "../../../shared/hooks";
import { COLLECTIONS_PER_PAGE } from "../constants/collectionsPerPage";
import { useTranslation } from "react-i18next";

interface ICollectionsWidgetProps {
  authUser: string;
  isAuthUserAdmin: boolean;
  userId: string;
}

export function CollectionsWidget({ authUser, isAuthUserAdmin, userId }: ICollectionsWidgetProps) {
  const { t } = useTranslation(["collections", "global"]);

  const [page, setPage] = useState(1);
  const [checkedCollections, setCheckedCollections] = useState<string[]>([]);
  const [isAddCollectionOpen, openAddCollection, closeAddCollection] = useModal();
  const [isConfirmDeleteOpen, openConfirmDelete, closeConfirmDelete] = useModal();

  const { data, isError } = useGetUserCollectionsQuery(
    { userId, page },
    { refetchOnMountOrArgChange: true }
  );

  const [deleteCollections, { isError: isDeletingError }] = useDeleteCollectionsMutation();

  const isAuthUserCollection = authUser === userId;

  if (isError) {
    return (
      <>
        <ErrorLoadingDocument />
      </>
    );
  }

  return (
    <>
      <Box sx={{ maxWidth: "660px", mx: "auto", pt: 5 }}>
        <SecondaryHeadingTypo sx={{ mb: 2, textAlign: "center" }}>
          {t("collections")}
        </SecondaryHeadingTypo>
        <Box sx={{ mb: 1, display: "flex", justifyContent: "end" }}>
          {authUser && (isAuthUserCollection || isAuthUserAdmin) && (
            <>
              <Button sx={{ mr: 2 }} variant="outlined" onClick={openAddCollection}>
                <AddIcon />
              </Button>
              <Button
                variant="outlined"
                color="error"
                disabled={!checkedCollections.length}
                onClick={openConfirmDelete}
              >
                <DeleteIcon />
              </Button>
            </>
          )}
        </Box>
        <CollectionsList
          collections={data?.collections || []}
          accessToCheck={isAuthUserAdmin || isAuthUserCollection}
          checkedCollections={checkedCollections}
          setCheckedCollections={setCheckedCollections}
        />
        {data?.total ? (
          <Pagination
            sx={{ display: "flex", justifyContent: "center" }}
            onChange={(e, value) => {
              setPage(value);
            }}
            count={Math.ceil((data?.total || 0) / COLLECTIONS_PER_PAGE)}
          />
        ) : (
          <LightTypo sx={{ fontStyle: "italic", textAlign: "center" }}>
            {t("havent_collections")}
          </LightTypo>
        )}
      </Box>
      <Modal open={isAddCollectionOpen} closeModal={closeAddCollection}>
        <AddCollectionForm userId={authUser} closeModal={closeAddCollection} />
      </Modal>
      <Modal open={isConfirmDeleteOpen} closeModal={closeConfirmDelete}>
        <>
          <SecondaryHeadingTypo sx={{ mb: 2 }}>{t("confirm_deleting")}</SecondaryHeadingTypo>
          <BodyTypo sx={{ mb: 3 }}>{t("confirm_deleting_info")}</BodyTypo>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                deleteCollections({ collections: checkedCollections, userId })
                  .unwrap()
                  .then(() => {
                    setCheckedCollections([]);
                    closeConfirmDelete();
                  });
              }}
            >
              {t("confirm", { ns: "global" })}
            </Button>
          </Box>
        </>
      </Modal>
      {isDeletingError && <AccessError />}
    </>
  );
}
