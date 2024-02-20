import { action, observable } from "mobx";
import type IResponseWithPagination from "@/services/responseWithPaginationDto";
import type {
  ICreateOrUpdatePaymentMethodInput,
  ICreateOrUpdateShippingmethodInput,
  ICreateOrderInput,
  IUpdateOrderInput,
  OrderOutputDto,
  PaymentMethodOutputDto,
  ShippingMethodOutputDto,
} from "@/services/order/dto";
import orderService from "@/services/order/orderService";

class OrderStore {
  @observable orders!: IResponseWithPagination<OrderOutputDto>;
  @observable editOrder: ICreateOrderInput | OrderOutputDto | null = null;
  @observable
  shippingMethods!: IResponseWithPagination<ShippingMethodOutputDto>;
  @observable editShippingMethod:
    | ICreateOrUpdateShippingmethodInput
    | ShippingMethodOutputDto
    | null = null;
  @observable paymentMethods!: IResponseWithPagination<PaymentMethodOutputDto>;
  @observable editPaymentMethod:
    | ICreateOrUpdatePaymentMethodInput
    | PaymentMethodOutputDto
    | null = null;

  @action
  async getOrders(pageNumber: number, pageSize: number) {
    const response = await orderService.GetOrders(pageNumber, pageSize);
    if (response) {
      this.orders = response;
    }
  }

  @action
  async getOrder(id: any) {
    const response = await orderService.GetOrder(id);
    if (response) {
      this.editOrder = response;
    }
  }

  @action
  async updateOrder(input: IUpdateOrderInput) {
    const response = await orderService.UpdateOrder(input);
    if (response) {
      this.editOrder = null;
      this.orders.items.map((item) => {
        if (item.orderId == input.orderId) item = response;
        return item;
      });
    }
  }

  @action
  async deleteOrder(id: any) {
    const response = await orderService.DeleteOrder(id);
    if (response) {
      this.editOrder = null;
      this.orders.items.map((item) => {
        return item.orderId != id;
      });
    }
  }
  @action
  createNewOrder() {
    this.editOrder = {
      customerId: 0,
      paymentId: 0,
      paymentType: 0,
      amount: 0,
      shippingType: 0,
      shippingFee: 0,
      statusId: 0,
      products: [],
    };
  }

  @action
  async createOrder(input: ICreateOrderInput) {
    const response = await orderService.CreateOrder(input);
    if (response) {
      this.editOrder = null;
    }
  }

  // SHIPPING METHOD
  @action
  createNewShippingMethod() {
    this.editShippingMethod = {
      shippingType: "",
      available: true,
    };
  }
  @action
  async createShippingMethod(input: ICreateOrUpdateShippingmethodInput) {
    const response = await orderService.CreateShippingMethod(input);
    if (response) {
      this.editShippingMethod = null;
    }
  }

  @action
  async getShippingMethod(id: any) {
    const response = await orderService.GetShippingMethod(id);
    if (response) {
      this.editShippingMethod = response;
    }
  }

  @action
  async updateShippingMethod(input: ICreateOrUpdateShippingmethodInput) {
    const response = await orderService.UpdateShippingMethod(input);
    if (response) {
      this.editShippingMethod = null;
      this.shippingMethods.items.map((item) => {
        if (item.id == input.id) item = response;
        return item;
      });
    }
  }

  @action
  async getShippingMethods(pageNumber: number, pageSize: number) {
    const response = await orderService.GetShippingMethods(
      pageNumber,
      pageSize
    );
    if (response) {
      this.shippingMethods = response;
    }
  }

  @action
  async deleteShippingMethod(id: any) {
    const response = await orderService.DeleteShippingMethod(id);
    if (response) {
      this.editShippingMethod = null;
      this.shippingMethods.items.map((item) => item.id != id);
    }
  }

  // PAYMENT METHOD
  @action
  async getPaymentMethod(id: any) {
    const response = await orderService.GetPaymentMethod(id);
    if (response) {
      this.editPaymentMethod = response;
    }
  }

  @action
  async updatePaymentMethod(input: ICreateOrUpdatePaymentMethodInput) {
    const response = await orderService.UpdatePaymentMethod(input);
    if (response) {
      this.editPaymentMethod = null;
      this.paymentMethods.items.map((item) => {
        if (item.id == input.id) item = response;
        return item;
      });
    }
  }

  @action
  async getPaymentMethods(pageNumber: number, pageSize: number) {
    const response = await orderService.GetPaymentMethods(pageNumber, pageSize);
    if (response) {
      this.paymentMethods = response;
    }
  }

  @action
  createNewPaymentMethod() {
    this.editPaymentMethod = {
      paymentType: "",
      available: true,
    };
  }

  @action
  async createPaymentMethod(input: ICreateOrUpdatePaymentMethodInput) {
    const response = await orderService.CreatePaymentMethod(input);
    if (response) {
      this.editPaymentMethod = null;
    }
  }

  @action
  async deletePaymentMethod(id: any) {
    const response = await orderService.DeletePaymentMethod(id);
    if (response) {
      this.editShippingMethod = null;
      this.paymentMethods.items.map((item) => item.id != id);
    }
  }
}

export default OrderStore;
