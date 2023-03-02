import React from "react";
import { Checkbox, FormControl, FormControlLabel, TextField, TextFieldProps } from "@mui/material";
import { AnyFieldType } from "../api/types";
import { FieldContainer, FieldTypeLabelContainer } from "./Field";
import { TagsItemField } from "./TagsItemsField";
import { MobileDatePicker } from "@mui/x-date-pickers";

interface ICreateCollectionItemMapProps {
  collectionItems: AnyFieldType[];
  values: { [key: string]: unknown };
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

export function CreateCollectionItemMap({
  collectionItems,
  values,
  setFieldValue,
}: ICreateCollectionItemMapProps) {
  console.log(collectionItems);
  return (
    <>
      {collectionItems.map((item) => {
        if (item.type === "string" || item.type === "text") {
          return (
            <FieldContainer key={item.name}>
              <FieldTypeLabelContainer>
                {item.type === "string" ? "String" : "Text"}
              </FieldTypeLabelContainer>
              <TextField
                size="small"
                label={item.name}
                name={item.name}
                value={values[item.name] || ""}
                onChange={(e) => {
                  setFieldValue(item.name, e.target.value);
                }}
                fullWidth
                multiline={item.type === "text"}
              />
            </FieldContainer>
          );
        } else if (item.type === "checkbox") {
          return (
            <FieldContainer key={item.name}>
              <FieldTypeLabelContainer>Checkbox</FieldTypeLabelContainer>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      name={item.name}
                      checked={!!values[item.name]}
                      onChange={(e) => {
                        setFieldValue(item.name, e.target.checked);
                      }}
                    />
                  }
                  label={item.name}
                />
              </FormControl>
            </FieldContainer>
          );
        } else if (item.type === "number") {
          return (
            <FieldContainer key={item.name}>
              <FieldTypeLabelContainer>Number</FieldTypeLabelContainer>
              <TextField
                sx={{ maxWidth: "160px" }}
                size="small"
                label={item.name}
                name={item.name}
                value={values[item.name] || ""}
                type="number"
                onChange={(e) => {
                  setFieldValue(item.name, e.target.value);
                }}
              />
            </FieldContainer>
          );
        } else if (item.type === "tags") {
          return (
            <FieldContainer key={item.name}>
              <FieldTypeLabelContainer>Tags</FieldTypeLabelContainer>
              <TagsItemField
                name={item.name}
                value={(values[item.name] as string[]) || []}
                addField={setFieldValue}
              />
            </FieldContainer>
          );
        } else if (item.type === "date") {
          return (
            <FieldContainer key={item.name}>
              <FieldTypeLabelContainer>Date</FieldTypeLabelContainer>
              <MobileDatePicker
                label={item.name}
                value={(values[item.name] as string) || ""}
                onChange={(value: string | null) => {
                  setFieldValue(item.name, value);
                }}
                renderInput={(params: TextFieldProps) => (
                  <TextField name={item.name} error={false} {...params} />
                )}
              />
            </FieldContainer>
          );
        }
      })}
    </>
  );
}
