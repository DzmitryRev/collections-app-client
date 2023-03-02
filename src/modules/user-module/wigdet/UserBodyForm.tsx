import React, { useMemo } from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import LoadingButton from "@mui/lab/LoadingButton";
import { Formik } from "formik";
import { ValidatedInput } from "../../../shared/components";
import { updateUserBodyValidationSchema } from "../utils/updateUserBodyValidation";
import SaveIcon from "@mui/icons-material/Save";

type UserBodyFormInitialType = { name: string; about: string };

interface IUserBodyFormProps {
  initialValue: UserBodyFormInitialType;
  isUpdating: boolean;
  updateUser: (newData: UserBodyFormInitialType) => void;
}

export function UserBodyForm({ initialValue, isUpdating, updateUser }: IUserBodyFormProps) {
  const initialValues = useMemo(() => {
    return {
      ...initialValue,
    };
  }, [initialValue]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={updateUserBodyValidationSchema}
      enableReinitialize={true}
      onSubmit={(values) => {
        updateUser(values);
      }}
    >
      {({ values, setFieldValue, ...formik }) => (
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <ValidatedInput
              sx={{ mb: 2 }}
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
            <TextField
              sx={{ mb: 3 }}
              label="About"
              name="about"
              value={values.about}
              onChange={(e) => {
                setFieldValue("about", e.target.value);
              }}
              fullWidth
              multiline
            />
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <LoadingButton
                type="submit"
                loading={isUpdating}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
              >
                Save
              </LoadingButton>
            </Box>
          </Box>
        </form>
      )}
    </Formik>
  );
}
