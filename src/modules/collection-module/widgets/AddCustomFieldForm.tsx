import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Formik } from "formik";
import { ValidatedInput } from "../../../shared/components";
import { AnyFieldType, CollectionType, FieldTypes } from "../api/types";
import { FIELD_TYPES } from "../constants/fieldTypes";
import { LoadingButton } from "@mui/lab";
import { addCustomFieldValidationSchema } from "../utils/addCustomFieldValidationSchema";
import { useTranslation } from "react-i18next";

interface IAddCustomFieldFormProps {
  requiredFields: AnyFieldType[];
  customFields: AnyFieldType[];
  updateCollection: (body: Partial<CollectionType>) => void;
  isUpdating: boolean;
}

const initialValues = {
  name: "",
  type: FIELD_TYPES[0],
};

export function AddCustomFieldForm({
  requiredFields,
  customFields,
  updateCollection,
  isUpdating,
}: IAddCustomFieldFormProps) {
  const { t } = useTranslation(["global", "collections"]);

  return (
    <Box sx={{ pt: 2 }}>
      <Formik
        initialValues={initialValues}
        validationSchema={addCustomFieldValidationSchema}
        enableReinitialize={true}
        onSubmit={(values, { setErrors }) => {
          if ([...requiredFields, ...customFields].find((item) => item.name === values.name)) {
            setErrors({ name: `${t("field_exist", { ns: "collections" })}` });
          } else {
            updateCollection({
              customFields: [
                ...customFields,
                { type: values.type as unknown as FieldTypes, name: values.name },
              ],
            });
          }
        }}
      >
        {({ values, setFieldValue, ...formik }) => (
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <ValidatedInput
                sx={{ mb: 2 }}
                label={t("name")}
                name="name"
                value={values.name}
                touched={formik.touched.name}
                errors={formik.errors.name}
                onChange={(e) => {
                  setFieldValue("name", e.target.value);
                }}
                fullWidth
              />
              <FormControl sx={{ mb: 2 }}>
                <InputLabel>{t("type")}</InputLabel>
                <Select
                  label={t("type")}
                  name="type"
                  value={values.type}
                  onChange={(e) => {
                    setFieldValue("type", e.target.value);
                  }}
                >
                  {FIELD_TYPES.map((item) => {
                    return (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <LoadingButton
                type="submit"
                loading={isUpdating}
                loadingPosition="start"
                startIcon={<AddIcon />}
                variant="contained"
              >
                {t("add")}
              </LoadingButton>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
