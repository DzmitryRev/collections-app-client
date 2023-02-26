import React from "react";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Button, LightTypo } from "../../../shared/components";
import { useUpdateUserForAdminMutation } from "../store/userQuery";

interface IAdminActionsProps {
  userId: string;
  isUserAdmin: boolean;
  isUserBlocked: boolean;
}

export function AdminActionsPanel({ userId, isUserAdmin, isUserBlocked }: IAdminActionsProps) {
  const [updateUserForAdmin] = useUpdateUserForAdminMutation();

  const makeAdmin = () => {
    updateUserForAdmin({ id: userId, isAdmin: true });
  };
  const blockUser = () => {
    updateUserForAdmin({ id: userId, isBlocked: true });
  };
  const unblockUser = () => {
    updateUserForAdmin({ id: userId, isBlocked: false });
  };

  return (
    <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      {isUserAdmin ? (
        <Box sx={{ display: "flex", alignItems: "center", color: "primary.main" }}>
          <StarIcon sx={{ fontSize: "15px", mr: "3px" }} />
          <LightTypo>admin</LightTypo>
        </Box>
      ) : (
        <Button variant="contained" onClick={makeAdmin} disabled={isUserBlocked}>
          Make admin
        </Button>
      )}
      {!isUserAdmin &&
        (isUserBlocked ? (
          <Button variant="contained" onClick={unblockUser}>
            Unblock
          </Button>
        ) : (
          <Button variant="contained" color="error" onClick={blockUser}>
            Block
          </Button>
        ))}
    </Box>
  );
}
