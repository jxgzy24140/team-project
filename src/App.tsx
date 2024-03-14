import Router from "@/components/Layout/Router";
import { inject } from "mobx-react";
import Stores from "./stores/storeIdentifier";
import AuthenticationStore from "./stores/authenticationStore";
import withRouter from "./components/Layout/Router/withRouter";

interface IProps {
  authenticationStore: AuthenticationStore;
  navigate: any;
}

inject(Stores.AuthenticationStore);
function App(props: IProps) {
  // if (!props.authenticationStore.isAuthenticated)
  //   props.navigate("/account/login");
  return <Router />;
}

export default withRouter(App);
