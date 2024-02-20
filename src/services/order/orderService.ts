import http from "@/services/httpService";
import {
  ICreateOrderInput,
  OrderOutputDto,
  IUpdateOrderInput,
  ICreateOrUpdateOrderStatusInput,
  OrderStatusOutputDto,
  ICreateOrUpdateShippingmethodInput,
  ShippingMethodOutputDto,
  ICreateOrUpdatePaymentMethodInput,
  PaymentMethodOutputDto,
} from "@/services/order/dto";
import IResponseWithPagination from "@/services/responseWithPaginationDto";

class OrderService {
  // Order
  public async CreateOrder(input: ICreateOrderInput): Promise<OrderOutputDto> {
    const response = await http.post("api/category", input);
    return response.data.result;
  }

  public async UpdateOrder(input: IUpdateOrderInput): Promise<OrderOutputDto> {
    const response = await http.patch("api/order", input);
    return response.data.result;
  }

  public async DeleteOrder(id: string): Promise<OrderOutputDto> {
    const response = await http.delete(`api/order/${id}`);
    return response.data.result;
  }

  public async GetOrder(id: string): Promise<OrderOutputDto> {
    const response = await http.get(`api/order/${id}`);
    return response.data.result;
  }

  public async GetOrders(
    pageNumber: number,
    pageSize: number
  ): Promise<IResponseWithPagination<OrderOutputDto>> {
    const response = await http.get("api/orders", {
      params: { pageSize, pageNumber },
    });
    return response.data.result;
  }

  // Order Status
  public async CreateOrderStatus(
    input: ICreateOrUpdateOrderStatusInput
  ): Promise<OrderStatusOutputDto> {
    const response = await http.post("api/category", input);
    return response.data.result;
  }

  public async UpdateOrderStatus(
    input: ICreateOrUpdateOrderStatusInput
  ): Promise<OrderStatusOutputDto> {
    const response = await http.patch("api/order", input);
    return response.data.result;
  }

  public async DeleteOrderStatus(id: string): Promise<OrderStatusOutputDto> {
    const response = await http.delete(`api/order/${id}`);
    return response.data.result;
  }

  public async GetOrderStatus(id: string): Promise<OrderStatusOutputDto> {
    const response = await http.get(`api/order/${id}`);
    return response.data.result;
  }

  public async GetListOrderStatus(
    pageNumber: number,
    pageSize: number
  ): Promise<IResponseWithPagination<OrderStatusOutputDto>> {
    const response = await http.get("api/orders", {
      params: { pageSize, pageNumber },
    });
    return response.data.result;
  }

  // Shipping Methods
  public async CreateShippingMethod(
    input: ICreateOrUpdateShippingmethodInput
  ): Promise<ShippingMethodOutputDto> {
    const response = await http.post("api/category", input);
    return response.data.result;
  }

  public async UpdateShippingMethod(
    input: ICreateOrUpdateShippingmethodInput
  ): Promise<ShippingMethodOutputDto> {
    const response = await http.patch("api/order", input);
    return response.data.result;
  }

  public async DeleteShippingMethod(
    id: string
  ): Promise<ShippingMethodOutputDto> {
    const response = await http.delete(`api/order/${id}`);
    return response.data.result;
  }

  public async GetShippingMethod(id: string): Promise<ShippingMethodOutputDto> {
    const response = await http.get(`api/order/${id}`);
    return response.data.result;
  }

  public async GetShippingMethods(
    pageNumber: number,
    pageSize: number
  ): Promise<IResponseWithPagination<ShippingMethodOutputDto>> {
    const response = await http.get("api/orders", {
      params: { pageSize, pageNumber },
    });
    return response.data.result;
  }

  // Payment Methods
  public async CreatePaymentMethod(
    input: ICreateOrUpdatePaymentMethodInput
  ): Promise<PaymentMethodOutputDto> {
    const response = await http.post("api/category", input);
    return response.data.result;
  }

  public async UpdatePaymentMethod(
    input: ICreateOrUpdatePaymentMethodInput
  ): Promise<PaymentMethodOutputDto> {
    const response = await http.patch("api/order", input);
    return response.data.result;
  }

  public async DeletePaymentMethod(
    id: string
  ): Promise<PaymentMethodOutputDto> {
    const response = await http.delete(`api/order/${id}`);
    return response.data.result;
  }

  public async GetPaymentMethod(id: string): Promise<PaymentMethodOutputDto> {
    const response = await http.get(`api/order/${id}`);
    return response.data.result;
  }

  public async GetPaymentMethods(
    pageNumber: number,
    pageSize: number
  ): Promise<IResponseWithPagination<PaymentMethodOutputDto>> {
    const response = await http.get("api/orders", {
      params: { pageSize, pageNumber },
    });
    return response.data.result;
  }
}

export default new OrderService();
