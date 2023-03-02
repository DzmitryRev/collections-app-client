import React, { useMemo } from "react";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { Formik } from "formik";
import AddIcon from "@mui/icons-material/Add";
import { CreateCollectionItemMap } from "../components/CreateCollectionItemMap";
import { useGetCollectionQuery } from "../store/collectionsQuery";
import { SecondaryHeadingTypo } from "../../../shared/components";

interface ICollectionItemSettingsFormProps {
  collectionId: string;
  action: (body: { [key: string]: unknown }) => void;
  collectionItemValues?: { [key: string]: unknown };
  isLoading: boolean;
}

export function CollectionItemSettingsForm({
  collectionId,
  action,
  collectionItemValues,
  isLoading,
}: ICollectionItemSettingsFormProps) {
  const { data } = useGetCollectionQuery(collectionId);

  const initialValues = useMemo(() => {
    const fields: { [key: string]: unknown } = {};
    [...(data?.requiredFields || []), ...(data?.customFields || [])].forEach((item) => {
      const currentValue = collectionItemValues && collectionItemValues[item.name];
      if (item.type === "string" || item.type === "text") {
        fields[item.name] = currentValue || "";
      } else if (item.type === "number") {
        fields[item.name] = currentValue || 0;
      } else if (item.type === "checkbox") {
        fields[item.name] = currentValue || false;
      } else if (item.type === "tags") {
        fields[item.name] = currentValue || [];
      } else if (item.type === "date") {
        fields[item.name] = currentValue || "";
      }
    });
    return {
      ...fields,
    };
  }, [data]);

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(values) => {
          action(values);
        }}
      >
        {({ values, setFieldValue, ...formik }) => (
          <>
            <SecondaryHeadingTypo>
              {collectionItemValues ? "Update Item" : "Add Item"}
            </SecondaryHeadingTypo>
            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ mb: 2 }}>
                <CreateCollectionItemMap
                  collectionItems={[...(data?.requiredFields || []), ...(data?.customFields || [])]}
                  values={values}
                  setFieldValue={setFieldValue}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <LoadingButton
                  type="submit"
                  loading={isLoading}
                  disabled={isLoading}
                  loadingPosition="start"
                  startIcon={<AddIcon />}
                  variant="contained"
                >
                  {collectionItemValues ? "Update" : "Add"}
                </LoadingButton>
              </Box>
            </form>
          </>
        )}
      </Formik>
    </Box>
  );
}
