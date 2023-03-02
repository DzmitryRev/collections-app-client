import React from "react";
import {
  Checkbox,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { CollectionInCollectionList } from "../api/types";
import { CollectionPhoto } from "./CollectionPhoto";
import { CustomLink } from "../../../shared/components";

interface ICollectionsListProps {
  collections: CollectionInCollectionList[];
  checkedCollections: string[];
  accessToCheck: boolean;
  setCheckedCollections: React.Dispatch<string[]>;
}

export function CollectionsList({
  collections,
  checkedCollections,
  accessToCheck,
  setCheckedCollections,
}: ICollectionsListProps) {
  const toggleCheckCollection = (itemId: string) => () => {
    const currentIndex = checkedCollections.indexOf(itemId);
    const newChecked = [...checkedCollections];
    if (currentIndex === -1) {
      newChecked.push(itemId);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setCheckedCollections(newChecked);
  };

  return (
    <>
      {!!collections.length && (
        <List dense sx={{ width: "100%" }}>
          {collections.map((item) => {
            const labelId = `checkbox-list-secondary-label-${item.id}`;
            return (
              <ListItem
                sx={{ mb: 1 }}
                key={item.id}
                secondaryAction={
                  accessToCheck && (
                    <Checkbox
                      edge="end"
                      onChange={toggleCheckCollection(item.id)}
                      checked={checkedCollections.indexOf(item.id) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  )
                }
                disablePadding
              >
                <CustomLink to={`/collection/${item.id}`} sx={{ display: "block", width: "100%" }}>
                  <ListItemButton>
                    <ListItemAvatar>
                      <CollectionPhoto sx={{ mr: 2 }} src={item.photo} size={"small"} />
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={item.name} secondary={item.theme} />
                  </ListItemButton>
                </CustomLink>
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
}
