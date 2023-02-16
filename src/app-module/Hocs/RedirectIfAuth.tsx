import React, { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

export type AccessToPageStateType = { access?: boolean };

export function RedirectIfAuth({ children }: PropsWithChildren) {
  const { user } = useAppSelector((state) => state.AuthReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  return <>{!user && children}</>;
}
