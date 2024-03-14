import { action, makeAutoObservable, observable } from "mobx";
import type {
  ICreateProductInput,
  IUpdateProductInput,
  ProductOutputDto,
} from "@/services/product/dto";
import productService from "@/services/product/productService";
import type IResponseWithPagination from "@/services/responseWithPaginationDto";

class ProductStore {
  @observable products!: IResponseWithPagination<ProductOutputDto>;
  @observable editProduct: ICreateProductInput | IUpdateProductInput | null =
    null;
  constructor() {
    makeAutoObservable(this);
  }
  @action
  async get(id: number) {
    const response = await productService.getProduct(id);
    if (response && response.success && response.data) {
      this.editProduct = response.data;
    }
  }

  @action
  async getAll(pageNumber: number, pageSize: number) {
    const response = await productService.getProducts(pageNumber, pageSize);
    if (response && response.success && response.data) {
      this.products = response.data;
    }
  }

  @action
  async create(input: ICreateProductInput) {
    const response = await productService.createProduct(input);
    if (response) {
      this.editProduct = null;
      this.products.items.map((product: any) => {
        if (response.data && product.productId == response.data.productId)
          product = response;
        return product;
      });
    }
  }

  @action
  async update(id: number, input: IUpdateProductInput) {
    const response = await productService.updateProduct(id, input);
    if (response && response.data) {
      this.editProduct = null;
      this.products.items.map((item: any) => {
        if (item.productId == input.productId) item = response;
        return item;
      });
    }
  }

  @action
  async delete(id: number) {
    const response = await productService.deleteProduct(id);
    if (response && response.data) {
      this.editProduct = null;
      this.products.items.map((product: any) => {
        if (product.productId != id) return product;
      });
    }
  }

  @action
  createProduct() {
    this.editProduct = {
      categoryId: 0,
      productName: "",
      description: "",
      image: "",
      price: 0,
      discount: 0,
      quantity: 0,
      inStock: true,
      creationId: 0,
    };
  }
}

export default ProductStore;
