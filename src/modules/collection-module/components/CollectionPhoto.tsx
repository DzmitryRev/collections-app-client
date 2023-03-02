import React from "react";
import { Avatar, AvatarProps } from "@mui/material";
import TopicIcon from "@mui/icons-material/Topic";

interface ICollectionPhotoProps extends AvatarProps {
  src: string;
  size: "small" | "large";
}

export function CollectionPhoto({ src, size, sx }: ICollectionPhotoProps) {
  const pixelSize = size === "large" ? "200px" : "50px";
  return (
    <Avatar
      sx={{ width: pixelSize, height: pixelSize, borderRadius: 0, ...sx }}
      alt="Collection photo"
      src={src}
    >
      <TopicIcon sx={{ fontSize: size === "large" ? "100px" : "20px" }} />
    </Avatar>
  );
}
