import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { checkAuthThunk } from "../store/thunks/checkAuth.thunk";

export function useCheckAuth() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuthThunk({}));
  }, []);
}
