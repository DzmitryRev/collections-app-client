import React from "react";
import { Box, Checkbox, Divider, IconButton, Paper } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { FieldContainer, FieldTypeLabelContainer } from "../components/Field";
import { BodyTypo, Modal, Spinner } from "../../../shared/components";
import {
  useGetCollectionItemQuery,
  useGetCollectionQuery,
  useToggleLikeCollectionItemMutation,
  useUpdateCollectionItemMutation,
} from "../store/collectionsQuery";
import ReactMarkdown from "react-markdown";
import { useModal } from "../../../shared/hooks";
import { BackLink } from "../components/BackLink";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Tag } from "../components/Tag";
import { CollectionItemSettingsForm } from "./CollectionItemSettingsForm";

interface ICollectionItemWidgetProps {
  authUser: string;
  isAuthUserAdmin: boolean;
  collectionItemId: string;
}

export function CollectionItemWidget({
  authUser,
  isAuthUserAdmin,
  collectionItemId,
}: ICollectionItemWidgetProps) {
  const { data, isLoading } = useGetCollectionItemQuery(collectionItemId);
  const { data: collection } = useGetCollectionQuery(data?.collectionId || "", {
    refetchOnMountOrArgChange: true,
  });

  const [isUpdateItemOpen, openUpdateItem, closeUpdateItem] = useModal();

  const [toggleLike] = useToggleLikeCollectionItemMutation();
  const [updateCollectionItem, { isLoading: isUpdating }] = useUpdateCollectionItemMutation();

  const updateItem = (body: { [key: string]: unknown }) => {
    updateCollectionItem({ ...body, userId: data?.user || "", collectionItemId })
      .unwrap()
      .then(() => {
        closeUpdateItem();
      });
  };

  const isAuthUserCollection = data?.user === authUser;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Box sx={{ maxWidth: "360px", mx: "auto" }}>
          <BackLink link={`/collection/${data?.collectionId}`} />
          <Paper sx={{ px: 3, py: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Box sx={{ position: "relative", right: "15px" }}>
                <IconButton
                  sx={{ mr: "2px" }}
                  disabled={!authUser}
                  onClick={() => {
                    toggleLike({ collectionItemId });
                  }}
                >
                  {data?.likes.includes(authUser) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                {data?.likes.length}
              </Box>

              {(isAuthUserCollection || isAuthUserAdmin) && (
                <IconButton sx={{ position: "relative", left: "15px" }} onClick={openUpdateItem}>
                  <SettingsIcon />
                </IconButton>
              )}
            </Box>

            {[...(collection?.requiredFields || []), ...(collection?.customFields || [])].map(
              (item) => {
                if (item.type === "checkbox") {
                  return (
                    <Box key={item.name}>
                      <>
                        {data?.body[item.name] && String(data?.body[item.name]) !== "" ? (
                          <FieldContainer key={item.name}>
                            <FieldTypeLabelContainer>{item.name}</FieldTypeLabelContainer>
                            <Checkbox
                              sx={{ p: 0, pb: "3px" }}
                              checked={data?.body[item.name] as boolean}
                              disabled={true}
                            />
                            <Divider />
                          </FieldContainer>
                        ) : (
                          <></>
                        )}
                      </>
                    </Box>
                  );
                }
                if (item.type === "text") {
                  return (
                    <Box key={item.name}>
                      <>
                        {data?.body[item.name] && String(data?.body[item.name]) !== "" ? (
                          <FieldContainer key={item.name}>
                            <FieldTypeLabelContainer>{item.name}</FieldTypeLabelContainer>
                            <ReactMarkdown>{data?.body[item.name] as string}</ReactMarkdown>
                            <Divider />
                          </FieldContainer>
                        ) : (
                          <></>
                        )}
                      </>
                    </Box>
                  );
                }
                if (item.type === "tags") {
                  return (
                    <Box key={item.name}>
                      <>
                        {data?.body[item.name] && String(data?.body[item.name]) !== "" ? (
                          <FieldContainer>
                            <FieldTypeLabelContainer>{item.name}</FieldTypeLabelContainer>
                            <Box>
                              {(data?.body[item.name] as string[]).map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                              ))}
                            </Box>
                            <Divider />
                          </FieldContainer>
                        ) : (
                          <></>
                        )}
                      </>
                    </Box>
                  );
                }
                return (
                  <Box key={item.name}>
                    <>
                      {data?.body[item.name] && String(data?.body[item.name]) !== "" ? (
                        <FieldContainer key={item.name}>
                          <FieldTypeLabelContainer>{item.name}</FieldTypeLabelContainer>
                          <BodyTypo>{data?.body[item.name] as string}</BodyTypo>
                          <Divider />
                        </FieldContainer>
                      ) : (
                        <></>
                      )}
                    </>
                  </Box>
                );
              }
            )}
          </Paper>
        </Box>
      )}
      <Modal open={isUpdateItemOpen} closeModal={closeUpdateItem}>
        <CollectionItemSettingsForm
          collectionId={data?.collectionId || ""}
          collectionItemValues={data?.body}
          action={updateItem}
          isLoading={isUpdating}
        />
      </Modal>
    </>
  );
}
