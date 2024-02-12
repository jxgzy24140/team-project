import http from "@/services/httpService";
import { ICreateOrderInput, OrderOutputDto } from "@/services/order/dto";

class OrderService {
  public async CreateOrder(input: ICreateOrderInput): Promise<OrderOutputDto> {
    const response = await http.post("api/category", input);
    return response.data.result;
  }

  public async GetOrder(id: string): Promise<OrderOutputDto> {
    const response = await http.get(`api/category/${id}`);
    return response.data.result;
  }
}

export default OrderService;
