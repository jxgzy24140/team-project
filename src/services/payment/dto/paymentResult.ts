export interface IPaymentResult {
  status: boolean;
  data: {
    orderId: number;
    transId?: number;
    amount: number;
    message: string;
  };
}
