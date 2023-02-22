import React from "react";
import { Avatar } from "@mui/material";

interface IUserAvatarProps {
  size: "large" | "small";
  src: string;
  userName: string;
}

export function UserAvatar({ size, src, userName }: IUserAvatarProps) {
  const pixelSize = size === "large" ? "200px" : "40px";
  return (
    <Avatar sx={{ width: pixelSize, height: pixelSize }} alt={`${userName} avatar`} src={src} />
  );
}
