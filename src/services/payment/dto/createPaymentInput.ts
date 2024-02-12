export interface ICreatePaymentInput {
  orderId: number;
  customerId: string;
  amount: number;
  paymentType: number;
}
