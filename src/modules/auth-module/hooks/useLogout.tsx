import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { logoutThunk } from "../store/thunks/logout.thunk";

export function useLogout() {
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(logoutThunk({}));
  };
  return { logout };
}
