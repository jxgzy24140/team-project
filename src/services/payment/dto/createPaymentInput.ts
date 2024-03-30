export interface ICreatePaymentInput {
  orderId: number;
  userId: string;
  amount: number;
  paymentMethodId: number;
  requestId: string;
  transId: number;
}
