import React from "react";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, CustomLink } from "../../../shared/components";

interface IBackLink {
  link: string;
}

export function BackLink({ link }: IBackLink) {
  return (
    <Box sx={{ mb: 1 }}>
      <CustomLink to={link}>
        <Button>
          <ArrowBackIcon sx={{ mr: 1 }} /> Back
        </Button>
      </CustomLink>
    </Box>
  );
}
