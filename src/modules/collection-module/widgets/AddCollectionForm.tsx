import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import { LoadingButton } from "@mui/lab";
import AddIcon from "@mui/icons-material/Add";
import { ValidatedInput } from "../../../shared/components";
import { useAddCollectionMutation, useGetCollectionsThemesQuery } from "../store/collectionsQuery";
import { AddCollectionBodyType } from "../api/types";
import { createCollectionBodyValidation } from "../utils/createCollectionBodyValidation";

interface ICollectionBodyFormProps {
  userId: string;
  closeModal: () => void;
}

const addCollectionInitialValue = {
  name: "",
  theme: "",
};

export function AddCollectionForm({ userId, closeModal }: ICollectionBodyFormProps) {
  const { data, isSuccess } = useGetCollectionsThemesQuery({});

  const [createCollection, { isLoading: isCreating }] = useAddCollectionMutation();

  return (
    <Box>
      <Formik
        initialValues={addCollectionInitialValue}
        validationSchema={createCollectionBodyValidation}
        enableReinitialize={true}
        onSubmit={(values) => {
          createCollection({ ...values, userId } as AddCollectionBodyType)
            .unwrap()
            .then(() => {
              closeModal();
            });
        }}
      >
        {({ values, setFieldValue, ...formik }) => (
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ mb: 2 }}>
              <ValidatedInput
                sx={{ mb: 1 }}
                label="Name"
                name="name"
                value={values.name}
                touched={formik.touched.name}
                errors={formik.errors.name}
                onChange={(e) => {
                  setFieldValue("name", e.target.value);
                }}
                fullWidth
              />
              <FormControl
                sx={{ mb: 3, minWidth: "110px" }}
                error={formik.touched.theme && !!formik.errors.theme}
              >
                <InputLabel id="demo-simple-select-label">Theme</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.theme}
                  label="Theme"
                  name="theme"
                  onChange={(e) => {
                    setFieldValue("theme", e.target.value);
                  }}
                >
                  {data?.themes.map((item) => {
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
                loading={isCreating}
                disabled={!isSuccess}
                loadingPosition="start"
                startIcon={<AddIcon />}
                variant="contained"
              >
                Create
              </LoadingButton>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
