import { Paper, styled } from "@mui/material";

export const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: "24px",
  [theme.breakpoints.down("sm")]: {
    padding: "12px",
  },
}));
