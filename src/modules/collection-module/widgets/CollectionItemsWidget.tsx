import React, { useMemo, useState } from "react";
import { Box, Checkbox } from "@mui/material";
import {
  AccessError,
  BodyTypo,
  Button,
  ErrorLoadingDocument,
  Modal,
  SecondaryHeadingTypo,
} from "../../../shared/components";
import {
  useAddCollectionItemMutation,
  useDeleteCollectionItemsMutation,
  useGetCollectionItemsQuery,
  useGetCollectionQuery,
} from "../store/collectionsQuery";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useModal } from "../../../shared/hooks";
import { Tag } from "../components/Tag";
import ReactMarkdown from "react-markdown";
import { CollectionContainer } from "../components/CollectionContainer";
import { useNavigate } from "react-router-dom";
import { CollectionItemSettingsForm } from "./CollectionItemSettingsForm";
import { useTranslation } from "react-i18next";

interface ICollectionItemsWidgetProps {
  authUser: string;
  isAuthUserAdmin: boolean;
  collectionId: string;
}

export function CollectionItemsWidget({
  authUser,
  isAuthUserAdmin,
  collectionId,
}: ICollectionItemsWidgetProps) {
  const { t } = useTranslation(["collections", "global"]);

  const navigate = useNavigate();

  const { data } = useGetCollectionQuery(collectionId);

  const { data: items, isError } = useGetCollectionItemsQuery(collectionId);

  const [deleteItems, { isError: isDeletingError }] = useDeleteCollectionItemsMutation();

  const [checkedCollectionItems, setCheckedCollectionItems] = useState<string[]>([]);

  const [isAddCollectionOpen, openAddCollection, closeAddCollection] = useModal();
  const [isConfirmDeleteOpen, openConfirmDelete, closeConfirmDelete] = useModal();

  const [createCollectionItem, { isLoading: isCreating, isError: isUpdatingError }] =
    useAddCollectionItemMutation();

  const createCollection = (body: { [key: string]: unknown }) => {
    createCollectionItem({ userId: data?.user || "", collectionId, ...body })
      .unwrap()
      .then(() => {
        closeAddCollection();
      });
  };

  const isAuthUserCollection = data?.user === authUser;

  const columns: GridColDef[] = useMemo(() => {
    return [...(data?.requiredFields || []), ...(data?.customFields || [])].map((field) => {
      if (field.type === "checkbox") {
        return {
          field: field.name,
          renderCell: (p) => {
            return p.value === true || false ? <Checkbox checked={p.value} disabled /> : <></>;
          },
        };
      }
      if (field.type === "tags") {
        return {
          field: field.name,
          sortable: false,
          renderCell: (p) => {
            return (
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {Array.isArray(p.value)
                  ? p.value.map((item) => {
                      return <Tag key={item}>{item}</Tag>;
                    })
                  : p.value}
              </Box>
            );
          },
        };
      }
      if (field.type === "text") {
        return {
          field: field.name,
          width: 200,
          renderCell: (p) => {
            return (
              <Box sx={{ maxHeight: "200px", overflow: "hidden", fontSize: "10px" }}>
                <ReactMarkdown>{p.value}</ReactMarkdown>
              </Box>
            );
          },
        };
      }
      return {
        field: field.name,
      };
    });
  }, [data]);

  const rows = useMemo(() => {
    return (
      items?.items?.map((item) => {
        return { ...item.body, id: item.id };
      }) || []
    );
  }, [items]);

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
        <Box sx={{ mb: 2, display: "flex", justifyContent: "end" }}>
          {authUser && (isAuthUserCollection || isAuthUserAdmin) && (
            <>
              <Button sx={{ mr: 2 }} variant="outlined" onClick={openAddCollection}>
                <AddIcon />
              </Button>
              <Button
                variant="outlined"
                color="error"
                disabled={!checkedCollectionItems.length}
                onClick={openConfirmDelete}
              >
                <DeleteIcon />
              </Button>
            </>
          )}
        </Box>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowHeight={() => "auto"}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection={isAuthUserCollection || isAuthUserAdmin}
            onSelectionModelChange={(selected) => {
              setCheckedCollectionItems(selected as string[]);
            }}
            onRowClick={(e) => {
              navigate(`/collection-item/${e.row.id}`);
            }}
            disableSelectionOnClick={true}
            autoHeight
          />
        </div>
      </CollectionContainer>
      <Modal open={isAddCollectionOpen} closeModal={closeAddCollection}>
        <CollectionItemSettingsForm
          collectionId={collectionId}
          action={createCollection}
          isLoading={isCreating}
        />
      </Modal>
      <Modal open={isConfirmDeleteOpen} closeModal={closeConfirmDelete}>
        <>
          <SecondaryHeadingTypo sx={{ mb: 2 }}>{t("confirm_deleting")}</SecondaryHeadingTypo>
          <BodyTypo sx={{ mb: 3 }}>{t("confirm_deleting_items_info")}</BodyTypo>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                deleteItems({ collectionItems: checkedCollectionItems, userId: data?.user || "" })
                  .unwrap()
                  .then(() => {
                    setCheckedCollectionItems([]);
                    closeConfirmDelete();
                  });
              }}
            >
              {t("confirm", { ns: "global" })}
            </Button>
          </Box>
        </>
      </Modal>
      {(isUpdatingError || isDeletingError) && <AccessError />}
    </>
  );
}
