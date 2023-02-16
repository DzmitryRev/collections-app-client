import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { cleanErrors } from "../store/authSlice";

export function useAuth() {
  const { loading, errors } = useAppSelector((state) => state.AuthReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(cleanErrors());
    };
  }, []);

  return {
    loading,
    errors,
    dispatch,
    navigate,
  };
}
