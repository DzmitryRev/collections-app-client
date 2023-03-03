import React from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import Person2Icon from "@mui/icons-material/Person2";
import { UserAvatar } from "../components/UserAvatar";
import { Button, CustomLink } from "../../../shared/components";
import { useMenu } from "../../../shared/hooks";
import { useGetUserProfileQuery } from "../store/userQuery";
import { useTranslation } from "react-i18next";
interface IUserMenuProps {
  userId: string;
  logout: () => void;
}

export function UserMenu({ userId, logout }: IUserMenuProps) {
  const { t } = useTranslation("global");

  const [anchorEl, isOpen, openMenu, closeMenu] = useMenu();

  const { data, isLoading, isError } = useGetUserProfileQuery(userId);

  const isLoadingOrNoData = isLoading || !data;

  if (isError) {
    return <></>;
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", m: 0 }}>
      {!isLoadingOrNoData && (
        <>
          <IconButton sx={{ mr: 1 }} onClick={openMenu}>
            <KeyboardArrowDownIcon sx={{ fontSize: "24px" }} />
          </IconButton>
          <Box>
            <UserAvatar size="small" userName={data?.name} src={data?.avatar} />
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={isOpen}
            onClose={closeMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <CustomLink sx={{ color: "inherit" }} to={`/user/${userId}`}>
              <MenuItem onClick={closeMenu}>
                <Person2Icon sx={{ mr: 1 }} /> {t("profile")}
              </MenuItem>
            </CustomLink>
            <CustomLink sx={{ color: "inherit" }} to={`/settings`}>
              <MenuItem onClick={closeMenu}>
                <SettingsIcon sx={{ mr: 1 }} /> {t("settings")}
              </MenuItem>
            </CustomLink>
            <MenuItem onClick={closeMenu}>
              <Button variant="contained" color="error" fullWidth onClick={logout}>
                {t("logout")}
              </Button>
            </MenuItem>
          </Menu>
        </>
      )}
    </Box>
  );
}
