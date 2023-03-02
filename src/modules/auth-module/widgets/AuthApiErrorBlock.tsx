import React from "react";
import { Box, List } from "@mui/material";
import { AuthApiErrorListItem } from "../components";

interface IAuthApiErrorsListProps {
  errors: string[];
}

export default function AuthApiErrorsList({ errors }: IAuthApiErrorsListProps) {
  return (
    <>
      {errors.length > 0 && (
        <Box sx={{ p: 1 }}>
          <List>
            {errors.map((item) => {
              return <AuthApiErrorListItem key={item} error={item} />;
            })}
          </List>
        </Box>
      )}
    </>
  );
}
