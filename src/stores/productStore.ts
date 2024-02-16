import type { IUpdateProductInput } from "@/services/product/dto";
import productService from "@/services/product/productService";
import { action, observable } from "mobx";

class ProductStore {
  @observable products!: any;
  @observable product!: any;

  @action
  async get(id: number) {
    const response = await productService.GetProduct(id);
    if (response) {
      this.product = response;
    }
  }

  @action
  async getAll(pageNumber: number, pageSize: number) {
    const response = await productService.GetProducts(pageNumber, pageSize);
    this.products.items = response.result;
  }

  @action
  async update(input: IUpdateProductInput) {
    const response = await productService.UpdateProduct(input);
    if (response) {
      this.products.map((item: any) => {
        if (item.productId == input.productId) item = response;
        return item;
      });
    }
  }

  @action
  async delete(id: number) {
    const response = await productService.DeleteProduct(id);
    if (response) {
      this.product = null;
    }
  }
}

export default ProductStore;
