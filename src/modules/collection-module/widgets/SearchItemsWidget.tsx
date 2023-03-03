import React, { useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { CustomLink, Modal } from "../../../shared/components";
import { useModal } from "../../../shared/hooks";
import { useSearchCollectionsItemsQuery } from "../store/collectionsQuery";
import { useTranslation } from "react-i18next";

export function SearchItemsWidget() {
  const { t } = useTranslation("global");

  const [searchValue, setSearchValue] = useState("");

  const { data } = useSearchCollectionsItemsQuery(searchValue, {
    refetchOnMountOrArgChange: true,
  });

  const [isSearchOpen, openSearch, closeSearch] = useModal();

  const findSearchedTextInFields = (body: { [key: string]: unknown }) => {
    let result: string[] = [];
    Object.keys(body).forEach((item) => {
      if (((body[item] as string) || "").includes(searchValue)) {
        result.push(item as string);
      }
    });
    return result.join("|");
  };

  return (
    <>
      <Box>
        <IconButton onClick={openSearch}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Modal
        open={isSearchOpen}
        closeModal={() => {
          setSearchValue("");
          closeSearch();
        }}
      >
        <>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              sx={{ mr: 2 }}
              size="small"
              label={t("search")}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              fullWidth
            />
            <IconButton size="small">
              <SearchIcon />
            </IconButton>
          </Box>
          <Box>
            {!!data?.items.length && (
              <List dense sx={{ width: "100%" }}>
                {data.items.map((item) => {
                  const labelId = `checkbox-list-secondary-label-${item.id}`;
                  return (
                    <>
                      <ListItem sx={{ mb: 1 }} key={item.id} disablePadding>
                        <CustomLink
                          to={`/collection-item/${item.id}`}
                          sx={{ display: "block", width: "100%" }}
                        >
                          <ListItemButton>
                            <ListItemText
                              id={labelId}
                              primary={(item.body.name as string) || "-"}
                              secondary={findSearchedTextInFields(item.body)}
                            />
                          </ListItemButton>
                        </CustomLink>
                      </ListItem>
                      <Divider />
                    </>
                  );
                })}
              </List>
            )}
          </Box>
        </>
      </Modal>
    </>
  );
}
