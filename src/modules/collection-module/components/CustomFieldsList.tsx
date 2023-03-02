import React from "react";
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import { AnyFieldType } from "../api/types";
import { LightTypo } from "../../../shared/components";

interface ICustomFieldsListProps {
  customFields: AnyFieldType[];
  deleteField: (fieldName: string) => void;
}

export function CustomFieldsList({ customFields, deleteField }: ICustomFieldsListProps) {
  return (
    <List>
      {customFields.length ? (
        customFields.map((item) => {
          return (
            <ListItem
              key={item.name}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    deleteField(item.name);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FeaturedPlayListIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={item.type} />
            </ListItem>
          );
        })
      ) : (
        <LightTypo sx={{ fontStyle: "italic" }}>Вы пока не добавили поля</LightTypo>
      )}
    </List>
  );
}
