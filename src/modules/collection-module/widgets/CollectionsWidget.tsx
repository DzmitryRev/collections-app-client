import React, { useState } from "react";
import { Box, Pagination } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  BodyTypo,
  Button,
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

interface ICollectionsWidgetProps {
  authUser: string;
  isAuthUserAdmin: boolean;
  userId: string;
}

export function CollectionsWidget({ authUser, isAuthUserAdmin, userId }: ICollectionsWidgetProps) {
  const [page, setPage] = useState(1);
  const [checkedCollections, setCheckedCollections] = useState<string[]>([]);
  const [isAddCollectionOpen, openAddCollection, closeAddCollection] = useModal();
  const [isConfirmDeleteOpen, openConfirmDelete, closeConfirmDelete] = useModal();

  const { data } = useGetUserCollectionsQuery(
    { userId, page },
    { refetchOnMountOrArgChange: true }
  );

  const [deleteCollections] = useDeleteCollectionsMutation();

  const isAuthUserCollection = authUser === userId;

  return (
    <>
      <Box sx={{ maxWidth: "660px", mx: "auto", pt: 5 }}>
        <SecondaryHeadingTypo sx={{ mb: 2, textAlign: "center" }}>Collections</SecondaryHeadingTypo>
        <Box sx={{ mb: 1, display: "flex", justifyContent: "end" }}>
          {isAuthUserCollection && (
            <Button sx={{ mr: 2 }} variant="outlined" onClick={openAddCollection}>
              <AddIcon />
            </Button>
          )}
          {authUser && (isAuthUserCollection || isAuthUserAdmin) && (
            <Button
              variant="outlined"
              color="error"
              disabled={!checkedCollections.length}
              onClick={openConfirmDelete}
            >
              <DeleteIcon />
            </Button>
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
            User have't collections
          </LightTypo>
        )}
      </Box>
      <Modal open={isAddCollectionOpen} closeModal={closeAddCollection}>
        <AddCollectionForm userId={authUser} closeModal={closeAddCollection} />
      </Modal>
      <Modal open={isConfirmDeleteOpen} closeModal={closeConfirmDelete}>
        <>
          <SecondaryHeadingTypo sx={{ mb: 2 }}>Confirm deleting</SecondaryHeadingTypo>
          <BodyTypo sx={{ mb: 3 }}>Are you sure you want to delete collections?</BodyTypo>
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
              Confirm
            </Button>
          </Box>
        </>
      </Modal>
    </>
  );
}
