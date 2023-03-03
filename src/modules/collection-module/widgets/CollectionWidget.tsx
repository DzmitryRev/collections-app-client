import React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import ReactMarkdown from "react-markdown";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  CustomLink,
  ErrorLoadingDocument,
  LightTypo,
  SecondaryHeadingTypo,
  Spinner,
} from "../../../shared/components";
import { CollectionPhoto } from "../components/CollectionPhoto";
import { useGetCollectionQuery } from "../store/collectionsQuery";
import { CollectionContainer } from "../components/CollectionContainer";
import { CollectionPaper } from "../components/CollectionPaper";
import { BackLink } from "../components/BackLink";
import { useTranslation } from "react-i18next";

interface ICollectionWidgetProps {
  authUser: string;
  isAuthUserAdmin: boolean;
  collectionId: string;
}

export function CollectionWidget({
  authUser,
  isAuthUserAdmin,
  collectionId,
}: ICollectionWidgetProps) {
  const { t } = useTranslation("collections");

  const { data, isLoading, isError } = useGetCollectionQuery(collectionId);

  console.log(data);

  const isAuthUserCollection = data?.user === authUser;

  if (isError) {
    return (
      <>
        <ErrorLoadingDocument />
      </>
    );
  }

  return (
    <CollectionContainer>
      <BackLink link={`/user/${data?.user}`} />
      {isLoading ? (
        <Spinner />
      ) : (
        <CollectionPaper elevation={4}>
          <Grid container spacing={2}>
            <Grid sx={{ display: "flex", justifyContent: "center" }} item xs={12} md={4}>
              <Box>
                <CollectionPhoto size="large" src={data?.photo || ""} />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box>
                <Box
                  sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <SecondaryHeadingTypo>{data?.name}</SecondaryHeadingTypo>
                  {(isAuthUserCollection || isAuthUserAdmin) && (
                    <CustomLink to={`settings`}>
                      <IconButton>
                        <SettingsIcon />
                      </IconButton>
                    </CustomLink>
                  )}
                </Box>
                <LightTypo sx={{ fontStyle: "italic", textDecoration: "underline", mb: 2 }}>
                  {data?.theme}
                </LightTypo>

                <Box sx={{ wordBreak: "break-word", whiteSpace: "normal" }}>
                  {data?.description ? (
                    <ReactMarkdown>{data?.description}</ReactMarkdown>
                  ) : (
                    <LightTypo sx={{ fontStyle: "italic" }}>{t("description_empty")}</LightTypo>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CollectionPaper>
      )}
    </CollectionContainer>
  );
}
