import React from "react";
import withRouter from "./withRouter";
import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";

const AdminProtectedRoute = inject(Stores.AuthenticationStore)(
  observer(({ children, ...props }: any) => {
    // const { navigate, authenticationStore } = props;
    // if (!authenticationStore.isAuthenticated) return navigate("/auth/login");
    // if (
    //   authenticationStore.isAuthenticated &&
    //   authenticationStore.userProfile.roleId == 1
    // )
    //   return navigate("/home");
    return <>{children}</>;
  })
);

export default withRouter(AdminProtectedRoute);
