import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { LightTypo } from "../../../shared/components";

interface IAuthApiErrorListItemProps {
  error: string;
}

export function AuthApiErrorListItem({ error }: IAuthApiErrorListItemProps) {
  return (
    <ListItem key={error} disablePadding={true}>
      <FiberManualRecordIcon sx={{ color: "error.main", fontSize: "10px", mr: 1 }} />
      <ListItemText>
        <LightTypo sx={{ color: "error.main" }}>{error}</LightTypo>
      </ListItemText>
    </ListItem>
  );
}
