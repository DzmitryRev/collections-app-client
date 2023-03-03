import React from "react";
import { Avatar, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { Dropzone, ImageUrlAndFileType } from "../../../shared/components";
import { UpdateUserBodyType } from "../api/types";
import { useUploadPhoto } from "../../../shared/hooks";
import { LoadingButton } from "@mui/lab";
import { useTranslation } from "react-i18next";

interface IUpdateAvatarFormProps {
  avatar: string;
  isUpdating: boolean;
  updateUser: (body: UpdateUserBodyType) => void;
}

export function UpdateAvatarForm({ avatar, isUpdating, updateUser }: IUpdateAvatarFormProps) {
  const updatePhoto = (url: string) => {
    updateUser({ avatar: url });
  };
  const { t } = useTranslation("global");

  const [currentAvatar, setAvatar, isPhotoUploading, cleanCurrentAvatar, saveAvatar] =
    useUploadPhoto(avatar, updatePhoto);

  return (
    <>
      <Box sx={{ mb: 3, width: "fit-content", position: "relative", mx: "auto" }}>
        {currentAvatar.url && (
          <IconButton
            sx={{ position: "absolute", top: "-10px", left: "-10px" }}
            onClick={cleanCurrentAvatar}
          >
            <DeleteIcon sx={{ fontSize: "25px", color: "error.main" }} />
          </IconButton>
        )}
        <Avatar sx={{ width: "200px", height: "200px" }} alt="Remy Sharp" src={currentAvatar.url} />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Dropzone
          setImage={(val: ImageUrlAndFileType) => {
            setAvatar(val);
          }}
        />
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <LoadingButton
            loading={isUpdating || isPhotoUploading}
            disabled={isUpdating || isPhotoUploading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
            onClick={saveAvatar}
          >
            {t("save")}
          </LoadingButton>
        </Box>
      </Box>
    </>
  );
}
