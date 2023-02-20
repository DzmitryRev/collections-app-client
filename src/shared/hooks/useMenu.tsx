import React, { useState } from "react";

export function useMenu(): [
  null | HTMLElement,
  boolean,
  (event: React.MouseEvent<HTMLButtonElement>) => void,
  () => void
] {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = !!anchorEl;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return [anchorEl, isOpen, handleClick, handleClose];
}
