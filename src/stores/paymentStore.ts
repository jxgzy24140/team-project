import type {
  ICreatePaymentInput,
  IPaymentResult,
} from "@/services/payment/dto";
import paymentService from "@/services/payment/paymentService";
import { action, makeAutoObservable, observable } from "mobx";

class PaymentStore {
  @observable payments!: any;
  @observable payment!: any;
  @observable paymentResult: IPaymentResult | null = null;
  getPaymentLink: any = null;
  constructor() {
    makeAutoObservable(this);
  }

  @action
  async get(id: number) {
    const response = await paymentService.getPayment(id);
    if (response && response.data) {
      this.payment = response.data;
    }
  }

  @action
  async executePayment(input: ICreatePaymentInput) {
    const response = await paymentService.createPayment(input);
    if (response && response.data) {
      this.getPaymentLink = response.data;
      return this.getPaymentLink;
    }
  }
}

export default PaymentStore;
