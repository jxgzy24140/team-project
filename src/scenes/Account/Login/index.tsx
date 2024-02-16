import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";
interface IProps {}
const Login = inject(Stores.ProductStore)(
  observer((props: IProps) => {
    return <h1>Login</h1>;
  })
);

export default Login;
