import React, { useMemo } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import LoadingButton from "@mui/lab/LoadingButton";
import { Formik } from "formik";
import { ValidatedInput } from "../../../shared/components";
import SaveIcon from "@mui/icons-material/Save";
import { useGetCollectionsThemesQuery } from "../store/collectionsQuery";
import { CollectionType } from "../api/types";
import { createCollectionBodyValidation } from "../utils/createCollectionBodyValidation";
import { useTranslation } from "react-i18next";

type CollectionSettingsBodyFormInitialType = {
  name: string;
  description: string;
  theme: string;
};

interface ICollectionSettingsBodyForm {
  initialValue: CollectionSettingsBodyFormInitialType;
  updateCollection: (body: Partial<CollectionType>) => void;
  isUpdating: boolean;
}

export function CollectionSettingsBodyForm({
  initialValue,
  isUpdating,
  updateCollection,
}: ICollectionSettingsBodyForm) {
  const { t } = useTranslation(["collections", "global"]);

  const { data: availableThemes } = useGetCollectionsThemesQuery({});

  const initialValues = useMemo(() => {
    return {
      ...initialValue,
    };
  }, [initialValue]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createCollectionBodyValidation}
      enableReinitialize={true}
      onSubmit={(values) => {
        updateCollection({ ...values });
      }}
    >
      {({ values, setFieldValue, ...formik }) => (
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <ValidatedInput
              sx={{ mb: 2 }}
              label={t("name", { ns: "global" })}
              name="name"
              value={values.name}
              touched={formik.touched.name}
              errors={formik.errors.name}
              onChange={(e) => {
                setFieldValue("name", e.target.value);
              }}
              fullWidth
            />
            <TextField
              sx={{ mb: 4 }}
              label={t("description")}
              name="description"
              value={values.description}
              onChange={(e) => {
                setFieldValue("description", e.target.value);
              }}
              fullWidth
              multiline
            />

            <FormControl
              sx={{ mb: 3, minWidth: "110px" }}
              error={formik.touched.theme && !!formik.errors.theme}
            >
              <InputLabel id="demo-simple-select-label">{t("theme")}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.theme}
                label={t("theme")}
                name="theme"
                onChange={(e) => {
                  setFieldValue("theme", e.target.value);
                }}
              >
                {availableThemes?.themes.map((item) => {
                  return (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <LoadingButton
                type="submit"
                loading={isUpdating}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
              >
                {t("save", { ns: "global" })}
              </LoadingButton>
            </Box>
          </Box>
        </form>
      )}
    </Formik>
  );
}
