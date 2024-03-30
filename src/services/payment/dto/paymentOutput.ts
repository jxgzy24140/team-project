export interface IPaymentOutput {
  paymentId: number;
  orderId: number;
  transId: number;
  userId: string;
  createdDate: Date;
  amount: number;
  paymentMethodId: number;
  paymentType: string;
  status: boolean;
}
