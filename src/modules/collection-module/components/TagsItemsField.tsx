import React, { useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "../../../shared/components";
import { Tag } from "./Tag";
import { useTranslation } from "react-i18next";

interface ITagsItemField {
  name: string;
  value: string[];
  addField: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

export function TagsItemField({ name, value, addField }: ITagsItemField) {
  const { t } = useTranslation("collections");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const addTag = () => {
    if (inputValue && !value.includes(inputValue)) {
      addField(name, [...value, inputValue]);
      setInputValue("");
    } else {
      setError(true);
    }
  };

  const deleteTag = (tag: string) => {
    addField(name, [...value.filter((item) => item !== tag)]);
  };

  return (
    <Box>
      <Box sx={{ mb: 1 }}>
        <TextField
          sx={{ mb: 1 }}
          size="small"
          name={"tag"}
          error={error}
          value={inputValue}
          onChange={(e) => {
            setError(false);
            setInputValue(e.target.value);
          }}
          fullWidth
        />
        <Button onClick={addTag} variant="contained" size="small">
          {t("add_tag")}
        </Button>
      </Box>
      <Box>
        {value.map((item) => {
          return (
            <Tag>
              {item}
              <IconButton
                sx={{ ml: 1, p: 0 }}
                onClick={() => {
                  deleteTag(item);
                }}
              >
                <CloseIcon sx={{ fontSize: "16px", color: "black" }} />
              </IconButton>
            </Tag>
          );
        })}
      </Box>
    </Box>
  );
}
