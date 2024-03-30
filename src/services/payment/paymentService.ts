import {
  ICreatePaymentInput,
  IUpdatePaymentInput,
  PaymentOutputDto,
} from "@/services/payment/dto";
import IResponseWithPagination from "@/services/responseWithPaginationDto";
import http from "@/services/httpService";
import { IHttpRequest } from "../httpRequestDto";
import { ICreateMomoPaymentInput } from "./dto/createMomoPaymentInput";

class PaymentService {
  public async createPayment(
    input: ICreatePaymentInput
  ): Promise<IHttpRequest<PaymentOutputDto>> {
    const response = await http.post("payments", input);
    return response.data;
  }

  public async createMomoPayment(
    input: ICreateMomoPaymentInput
  ): Promise<IHttpRequest<PaymentOutputDto>> {
    const response = await http.post("payments/pay-with-momo", input);
    return response.data;
  }

  public async updatePayment(
    input: IUpdatePaymentInput
  ): Promise<IHttpRequest<PaymentOutputDto>> {
    const response = await http.patch("payments", input);
    return response.data;
  }

  public async deletePayment(
    id: string
  ): Promise<IHttpRequest<PaymentOutputDto>> {
    const response = await http.delete(`payments/${id}`);
    return response.data;
  }

  public async getPayment(id: number): Promise<IHttpRequest<PaymentOutputDto>> {
    const response = await http.get(`payments/${id}`);
    return response.data;
  }

  public async getPayments(
    pageNumber: number,
    pageSize: number
  ): Promise<IHttpRequest<IResponseWithPagination<PaymentOutputDto>>> {
    const response = await http.get("payments", {
      params: { pageSize, pageNumber },
    });
    return response.data;
  }
}

export default new PaymentService();
