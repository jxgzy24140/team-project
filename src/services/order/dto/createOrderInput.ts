import { ICreateProductOrderDetailInput } from "./createproductOrderDetailInput";

export interface ICreateOrderInput {
  customerId: number;
  paymentId: number;
  paymentType: number;
  amount: number;
  shippingType: number;
  shippingFee: number;
  createdDate: number;
  statusId: number;
  products: ICreateProductOrderDetailInput[];
}
