import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";

interface IProps {}
const Cart = inject(Stores.ProductStore)(
  observer((props: IProps) => {
    return <h1>Home</h1>;
  })
);

export default Cart;
