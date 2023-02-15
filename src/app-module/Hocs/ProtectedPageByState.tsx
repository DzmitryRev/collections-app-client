import React, { PropsWithChildren, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type AccessToPageStateType = { access?: boolean };

export function ProtectedPageByState({ children }: PropsWithChildren) {
  const location = useLocation();
  const navigate = useNavigate();
  let state = location.state as AccessToPageStateType;
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);
  return <>{state && children}</>;
}
