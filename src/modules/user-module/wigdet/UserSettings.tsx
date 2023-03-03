import React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { AccessError, ErrorLoadingDocument, Modal, Spinner } from "../../../shared/components";
import { ProfileContainer } from "../components/ProfileContainer";
import { UpdateAvatarForm } from "./UpdateAvatarForm";
import { ProfilePaper } from "../components/ProfilePaper";
import { UserAvatar } from "../components/UserAvatar";
import { useModal } from "../../../shared/hooks";
import { useGetUserProfileQuery, useUpdateUserBodyMutation } from "../store/userQuery";
import { UserBodyForm } from "./UserBodyForm";
import { UpdateUserBodyType } from "../api/types";

interface IUserSettingsProps {
  userId: string;
}

export function UserSettings({ userId }: IUserSettingsProps) {
  const [isChangeAvatarOpen, openChangeAvatar, closeChangeAvatar] = useModal();

  const { data, isLoading, isError } = useGetUserProfileQuery(userId);
  const [updateUser, { isLoading: isUpdating, isError: isUpdatingError }] =
    useUpdateUserBodyMutation();

  const updateUserBody = (body: UpdateUserBodyType) => {
    updateUser({ id: userId, ...body });
  };

  if (isError) {
    return (
      <>
        <ErrorLoadingDocument />
      </>
    );
  }

  const isLoadingOrNoData = isLoading || !data;

  return (
    <>
      <ProfileContainer>
        {isLoadingOrNoData ? (
          <Spinner />
        ) : (
          <ProfilePaper>
            <Grid container spacing={2}>
              <Grid sx={{ display: "flex", justifyContent: "center" }} item xs={12} md={4}>
                <Box>
                  <IconButton onClick={openChangeAvatar}>
                    <UserAvatar size="large" src={data.avatar} userName={data.name} />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <UserBodyForm
                  initialValue={{ name: data?.name || "", about: data?.about || "" }}
                  isUpdating={isUpdating}
                  updateUser={updateUserBody}
                />
              </Grid>
            </Grid>
          </ProfilePaper>
        )}
      </ProfileContainer>
      <Modal open={isChangeAvatarOpen} closeModal={closeChangeAvatar}>
        <UpdateAvatarForm
          avatar={data?.avatar || ""}
          updateUser={updateUserBody}
          isUpdating={isUpdating}
        />
      </Modal>
      {isUpdatingError && <AccessError />}
    </>
  );
}
