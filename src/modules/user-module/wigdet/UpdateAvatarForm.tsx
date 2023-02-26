import React, { useState } from "react";
import { Avatar, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  ChildrenOrSpinner,
  Dropzone,
  ImageUrlAndFileType,
} from "../../../shared/components";
import { imagekit } from "../../../shared/services/imagekit";
import { useUpdateUserBodyMutation } from "../store/userQuery";

interface IUpdateAvatarFormProps {
  userId: string;
  avatar: string;
}

export function UpdateAvatarForm({ userId, avatar }: IUpdateAvatarFormProps) {
  const [currentAvatar, setAvatar] = useState<ImageUrlAndFileType>({
    url: avatar,
    file: null,
  });

  const [updateAvatar, { isLoading: isUpdating }] = useUpdateUserBodyMutation();

  const updateUserAvatar = (body: { avatar: string }) => {
    updateAvatar({ id: userId, ...body });
  };

  const [isLoading, setIsLoading] = useState(false);

  const saveAvatar = () => {
    if (!currentAvatar.file && !currentAvatar.url) {
      updateUserAvatar({ avatar: "" });
      return;
    }
    if (!currentAvatar.file) {
      return;
    }
    setIsLoading(true);
    imagekit.upload(
      {
        file: currentAvatar.file,
        fileName: "collectory-avatars",
      },
      function (err, result) {
        setIsLoading(false);
        if (err) {
          return;
        }
        updateUserAvatar({ avatar: result?.url || "" });
      }
    );
  };

  const cleanCurrentAvatar = () => {
    setAvatar({
      url: "",
      file: null,
    });
  };

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
        <ChildrenOrSpinner condition={isUpdating || isLoading}>
          <Button variant="contained" onClick={saveAvatar}>
            Save
          </Button>
        </ChildrenOrSpinner>
      </Box>
    </>
  );
}
