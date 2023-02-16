import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { LightTypo } from "../../../shared/components";
import { useTranslation } from "react-i18next";

interface IAuthApiErrorListItemProps {
  error: string;
}

export function AuthApiErrorListItem({ error }: IAuthApiErrorListItemProps) {
  const { t } = useTranslation("apiErrors");
  return (
    <ListItem key={error} disablePadding={true}>
      <FiberManualRecordIcon sx={{ color: "error.main", fontSize: "10px", mr: 1 }} />
      <ListItemText>
        <LightTypo sx={{ color: "error.main" }}>{t(error)}</LightTypo>
      </ListItemText>
    </ListItem>
  );
}
