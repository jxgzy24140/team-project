import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  if (!localStorage.getItem("accessToken"))
    return <Navigate to="/account/login" />;
  return <>{children}</>;
};

export default ProtectedRoute;
