import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  if (!sessionStorage.getItem("accessToken"))
    return <Navigate to="/account/login" />;
  return <>{children}</>;
};

export default ProtectedRoute;
