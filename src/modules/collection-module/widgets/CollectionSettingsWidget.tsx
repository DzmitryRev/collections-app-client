import React from "react";
import { Alert, AlertTitle, Box, Grid, IconButton } from "@mui/material";
import { CollectionPhoto } from "../components/CollectionPhoto";
import { CollectionSettingsBodyForm } from "./CollectionSettingsBodyForm";
import { useGetCollectionQuery, useUpdateCollectionMutation } from "../store/collectionsQuery";
import {
  AccessError,
  Button,
  ErrorLoadingDocument,
  Modal,
  SecondaryHeadingTypo,
  Spinner,
} from "../../../shared/components";
import { useModal } from "../../../shared/hooks";
import { CustomFieldsList } from "../components/CustomFieldsList";
import { AddCustomFieldForm } from "./AddCustomFieldForm";
import { UpdateCollectionPhotoForm } from "./UpdateCollectionPhotoForm";
import { CollectionContainer } from "../components/CollectionContainer";
import { CollectionPaper } from "../components/CollectionPaper";
import { BackLink } from "../components/BackLink";
import { CollectionType } from "../api/types";
import { useTranslation } from "react-i18next";

interface ICollectionSettingsWidgetProps {
  collectionId: string;
  authUser: string;
}

export function CollectionSettingsWidget({
  collectionId,
  authUser,
}: ICollectionSettingsWidgetProps) {
  const { t } = useTranslation("collections");

  const { data, isLoading, isError } = useGetCollectionQuery(collectionId);
  const [updateCollectionReq, { isLoading: isUpdating, isError: isUpdatingError }] =
    useUpdateCollectionMutation();

  const updateCollection = (body: Partial<CollectionType>) => {
    updateCollectionReq({ ...body, collectionId, userId: authUser })
      .unwrap()
      .then(() => {
        closeChangePhoto();
        closeAddCustomField();
      });
  };

  const deleteCustomField = (fieldName: string) => {
    updateCollection({
      customFields: data?.customFields.filter((item) => item.name !== fieldName),
    });
  };

  const [isChangePhotoOpen, openChangePhoto, closeChangePhoto] = useModal();
  const [isAddCustomFieldOpen, openAddCustomField, closeAddCustomField] = useModal();

  if (isError) {
    return (
      <>
        <ErrorLoadingDocument />
      </>
    );
  }

  return (
    <>
      <CollectionContainer>
        <BackLink link={`/collection/${collectionId}`} />
        {isLoading ? (
          <Spinner />
        ) : (
          <CollectionPaper>
            <Grid container spacing={2}>
              <Grid sx={{ display: "flex", justifyContent: "center" }} item xs={12} md={4}>
                <Box>
                  <IconButton sx={{ borderRadius: 0 }} onClick={openChangePhoto}>
                    <CollectionPhoto size="large" src={data?.photo || ""} />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box sx={{ mb: 3 }}>
                  <CollectionSettingsBodyForm
                    initialValue={{
                      name: data?.name || "",
                      description: data?.description || "",
                      theme: data?.theme || "",
                    }}
                    updateCollection={updateCollection}
                    isUpdating={isUpdating}
                  />
                </Box>
                <Box>
                  <Box sx={{ mb: 2 }}>
                    <SecondaryHeadingTypo>{t("custom_fields")}</SecondaryHeadingTypo>
                    <CustomFieldsList
                      customFields={data?.customFields || []}
                      deleteField={deleteCustomField}
                    />
                    <Alert severity="info">
                      <AlertTitle>{t("info")}</AlertTitle>
                      {t("custom_field_info")}
                    </Alert>
                  </Box>
                  <Button onClick={openAddCustomField} variant="contained">
                    {t("add_custom_field")}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CollectionPaper>
        )}
      </CollectionContainer>
      <Modal open={isChangePhotoOpen} closeModal={closeChangePhoto}>
        <UpdateCollectionPhotoForm
          photo={data?.photo || ""}
          updateCollection={updateCollection}
          isUpdating={isUpdating}
        />
      </Modal>
      <Modal open={isAddCustomFieldOpen} closeModal={closeAddCustomField}>
        <AddCustomFieldForm
          requiredFields={data?.requiredFields || []}
          customFields={data?.customFields || []}
          updateCollection={updateCollection}
          isUpdating={isUpdating}
        />
      </Modal>
      {isUpdatingError && <AccessError />}
    </>
  );
}
