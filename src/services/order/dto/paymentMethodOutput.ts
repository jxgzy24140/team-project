export interface IPaymentMethodOutput {
  paymentId: number;
  orderId: number;
  customerId: string;
  createdDate: number;
  amount: number;
  paymentType: number;
  status: boolean;
}
