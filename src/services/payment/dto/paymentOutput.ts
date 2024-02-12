export interface IPaymentOutput {
  paymentId: number;
  orderId: number;
  customerId: string;
  createdDate: Date;
  amount: number;
  paymentType: number;
  status: boolean;
}
