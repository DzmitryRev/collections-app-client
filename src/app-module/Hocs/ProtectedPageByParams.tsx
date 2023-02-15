import React, { PropsWithChildren, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function ProtectedPageByParams({ children }: PropsWithChildren) {
  const [params] = useSearchParams();
  const access = params.get("access") === "true";
  const navigate = useNavigate();
  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, []);
  return <>{access && children}</>;
}
