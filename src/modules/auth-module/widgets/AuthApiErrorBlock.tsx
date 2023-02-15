import React from "react";
import { List, Paper } from "@mui/material";
import { AuthApiErrorListItem } from "../components";

interface IAuthApiErrorsListProps {
  errors: string[];
}

export default function AuthApiErrorsList({ errors }: IAuthApiErrorsListProps) {
  return (
    <>
      {errors.length > 0 && (
        <Paper sx={{ p: 1 }} elevation={4}>
          <List>
            {errors.map((item) => {
              return <AuthApiErrorListItem key={item} error={item} />;
            })}
          </List>
        </Paper>
      )}
    </>
  );
}
