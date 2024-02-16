import {
  ICreatePaymentInput,
  IUpdatePaymentInput,
  PaymentOutputDto,
} from "@/services/payment/dto";
import IResponseWithPagination from "@/services/responseWithPaginationDto";
import http from "@/services/httpService";

class PaymentService {
  public async CreatePayment(
    input: ICreatePaymentInput
  ): Promise<PaymentOutputDto> {
    const response = await http.post("api/payment", input);
    return response.data.result;
  }

  public async UpdatePayment(
    input: IUpdatePaymentInput
  ): Promise<PaymentOutputDto> {
    const response = await http.patch("api/payment", input);
    return response.data.result;
  }

  public async DeletePayment(id: string): Promise<PaymentOutputDto> {
    const response = await http.delete(`api/payment/${id}`);
    return response.data.result;
  }

  public async GetPayment(id: string): Promise<PaymentOutputDto> {
    const response = await http.get(`api/payment/${id}`);
    return response.data.result;
  }

  public async GetPayments(
    pageNumber: number,
    pageSize: number
  ): Promise<IResponseWithPagination<PaymentOutputDto>> {
    const response = await http.get("api/payments", {
      params: { pageSize, pageNumber },
    });
    return response.data.result;
  }
}

export default new PaymentService();
