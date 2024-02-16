import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";

interface IProps {}
const Register = inject(Stores.ProductStore)(
  observer((props: IProps) => {
    return <h1>Register</h1>;
  })
);

export default Register;
