import { ICreateProductOrderDetailInput } from "@/services/order/dto/createProductOrderDetailInput";

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
