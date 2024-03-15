import Router from "@/components/Layout/Router";
import { inject } from "mobx-react";
import Stores from "./stores/storeIdentifier";
import AuthenticationStore from "./stores/authenticationStore";
import withRouter from "./components/Layout/Router/withRouter";
import { useEffect } from "react";

interface IProps {
  authenticationStore: AuthenticationStore;
}

const App = inject(Stores.AuthenticationStore)((props: IProps) => {
  useEffect(() => {
    const getAuth = async () => {
      await props.authenticationStore.getAuthentication();
    };
    getAuth();
    console.log(props.authenticationStore);
  }, []);

  return <Router />;
});

export default withRouter(App);
