import React from "react";
import { Box, Grid } from "@mui/material";
import {
  ErrorLoadingDocument,
  LightTypo,
  SecondaryHeadingTypo,
  Spinner,
} from "../../../shared/components";
import ReactMarkdown from "react-markdown";
import { AdminActionsPanel } from "./AdminActionsPanel";
import { UserAvatar } from "../components/UserAvatar";
import { ProfilePaper } from "../components/ProfilePaper";
import { ProfileContainer } from "../components/ProfileContainer";
import { useGetUserProfileQuery } from "../store/userQuery";
import { useTranslation } from "react-i18next";

interface IUserProfileProps {
  authUser: string;
  isAuthUserAdmin: boolean;
  userId: string;
}

export function UserProfile({ authUser, isAuthUserAdmin, userId }: IUserProfileProps) {
  const { t } = useTranslation("user");

  const { data, isLoading, isError } = useGetUserProfileQuery(userId);

  const isLoadingOrNoData = isLoading || !data;

  if (isError) {
    return (
      <>
        <ErrorLoadingDocument />
      </>
    );
  }

  return (
    <ProfileContainer>
      {isLoadingOrNoData ? (
        <Spinner />
      ) : (
        <ProfilePaper elevation={4}>
          {authUser && isAuthUserAdmin && data && (
            <AdminActionsPanel
              userId={userId}
              isUserAdmin={data.isAdmin || false}
              isUserBlocked={data.isBlocked || false}
            />
          )}
          <Grid container spacing={2}>
            <Grid sx={{ display: "flex", justifyContent: "center" }} item xs={12} md={4}>
              <Box>
                <UserAvatar size="large" src={data.avatar} userName={data.name} />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box>
                <SecondaryHeadingTypo sx={{ mb: 2 }}> {data.name}</SecondaryHeadingTypo>
                <Box sx={{ wordBreak: "break-word", whiteSpace: "normal" }}>
                  {data.about ? (
                    <ReactMarkdown>{data.about}</ReactMarkdown>
                  ) : (
                    <LightTypo sx={{ fontStyle: "italic" }}>{t("about_empty")}</LightTypo>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ProfilePaper>
      )}
    </ProfileContainer>
  );
}
