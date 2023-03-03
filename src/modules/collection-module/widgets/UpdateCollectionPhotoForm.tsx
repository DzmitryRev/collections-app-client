import React from "react";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { Dropzone, ImageUrlAndFileType } from "../../../shared/components";
import { useUploadPhoto } from "../../../shared/hooks";
import { CollectionType } from "../api/types";
import { CollectionPhoto } from "../components/CollectionPhoto";
import { LoadingButton } from "@mui/lab";
import { useTranslation } from "react-i18next";

interface IUpdateColletionPhotoProps {
  photo: string;
  isUpdating: boolean;
  updateCollection: (body: Partial<CollectionType>) => void;
}

export function UpdateCollectionPhotoForm({
  photo,
  isUpdating,
  updateCollection,
}: IUpdateColletionPhotoProps) {
  const { t } = useTranslation("global");

  const updatePhoto = (url: string) => {
    updateCollection({ photo: url });
  };
  const [currentPhoto, setPhoto, isPhotoUploading, cleanCurrentAvatar, savePhoto] = useUploadPhoto(
    photo,
    updatePhoto
  );

  return (
    <>
      <Box sx={{ mb: 3, width: "fit-content", position: "relative", mx: "auto" }}>
        {currentPhoto.url && (
          <IconButton
            sx={{ position: "absolute", top: "-20px", left: "-45px" }}
            onClick={cleanCurrentAvatar}
          >
            <DeleteIcon sx={{ fontSize: "25px", color: "error.main" }} />
          </IconButton>
        )}
        <CollectionPhoto size="large" src={currentPhoto.url} />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Dropzone
          setImage={(val: ImageUrlAndFileType) => {
            setPhoto(val);
          }}
        />
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <LoadingButton
          type="submit"
          loading={isUpdating || isPhotoUploading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          onClick={savePhoto}
          variant="contained"
        >
          {t("save")}
        </LoadingButton>
      </Box>
    </>
  );
}
