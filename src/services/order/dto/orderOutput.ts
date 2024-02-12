export interface IOrderOutput {
  orderId: number;
  customerId: number;
  paymentId: number;
  paymentType: number;
  amount: number;
  shippingType: number;
  shippingFee: number;
  createdDate: Date;
  statusId: number;
}
