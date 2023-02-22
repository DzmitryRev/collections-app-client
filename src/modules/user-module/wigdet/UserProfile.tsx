import React from "react";
import { Box, Grid } from "@mui/material";
import {
  ErrorWhileLoading,
  LightTypo,
  SecondaryHeadingTypo,
  Spinner,
} from "../../../shared/components";
import ReactMarkdown from "react-markdown";
import { AdminActionsPanel } from "./AdminActionsPanel";
import { UserAvatar } from "../components/UserAvatar";
import { UserType } from "../../../shared/api";
import { ProfilePaper } from "../components/ProfilePaper";
import { ProfileContainer } from "../components/ProfileContainer";
import { useGetUserProfileQuery } from "../store/userQuery";

interface IUserProfileProps {
  currentUser: UserType | null;
  userId: string;
}

export function UserProfile({ currentUser, userId }: IUserProfileProps) {
  const { data, isLoading, error } = useGetUserProfileQuery(userId);

  const isLoadingOrNoData = isLoading || !data;

  if (error) return <ErrorWhileLoading />;

  return (
    <ProfileContainer>
      {isLoadingOrNoData ? (
        <Spinner />
      ) : (
        <ProfilePaper elevation={4}>
          {currentUser && currentUser.isAdmin && data && (
            <AdminActionsPanel
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
                    <LightTypo sx={{ fontStyle: "italic" }}>About section is empty</LightTypo>
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
