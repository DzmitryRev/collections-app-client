import { Paper, styled } from "@mui/material";

export const CollectionPaper = styled(Paper)(({ theme }) => ({
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    padding: "12px",
  },
}));
