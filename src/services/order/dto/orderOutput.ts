export interface IOrderOutput {
  orderId: number;
  customerId: number;
  customerName: string;
  paymentId: number;
  paymentType: number;
  paymentName: string;
  amount: number;
  shippingType: number;
  shippingName: string;
  shippingFee: number;
  createdDate: Date;
  statusId: number;
  statusName: string;
}
