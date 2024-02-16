import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";

interface IProps {}
const Detail = inject(Stores.ProductStore)(
  observer((props: IProps) => {
    return <h1>Detail</h1>;
  })
);

export default Detail;
