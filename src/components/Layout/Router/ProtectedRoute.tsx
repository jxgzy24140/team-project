import React, { useEffect } from "react";
import withRouter from "./withRouter";
import { authLayouts } from "./router.config";
import { inject } from "mobx-react";
import Stores from "@/stores/storeIdentifier";

const ProtectedRoute = inject(Stores.AuthenticationStore)(
  ({ children, authenticationStore, navigate }: any) => {
    // useEffect(() => {
    //   if (!sessionStorage.getItem("accessToken"))
    //     navigate(`/auth/${authLayouts.login.path}`);
    // }, []);
    return <>{children}</>;
  }
);

export default withRouter(ProtectedRoute);
