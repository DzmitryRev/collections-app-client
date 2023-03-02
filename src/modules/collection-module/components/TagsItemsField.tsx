import React, { useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "../../../shared/components";
import { Tag } from "./Tag";

interface ITagsItemField {
  name: string;
  value: string[];
  addField: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

export function TagsItemField({ name, value, addField }: ITagsItemField) {
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
          label={"Add tag"}
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
          Add Tag
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
