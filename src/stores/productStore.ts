import { action, observable } from "mobx";
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

  @action
  async get(id: number) {
    const response = await productService.GetProduct(id);
    if (response) {
      this.editProduct = response;
    }
  }

  @action
  async getAll(pageNumber: number, pageSize: number) {
    const response = await productService.GetProducts(pageNumber, pageSize);
    this.products.items = response.items;
  }

  @action
  async create(input: ICreateProductInput) {
    const response = await productService.CreateProduct(input);
    if (response) {
      this.editProduct = null;
      this.products.items.map((product: any) => {
        if (product.productId == response.productId) product = response;
        return product;
      });
    }
  }

  @action
  async update(input: IUpdateProductInput) {
    const response = await productService.UpdateProduct(input);
    if (response) {
      this.products.items.map((item: any) => {
        if (item.productId == input.productId) item = response;
        return item;
      });
    }
  }

  @action
  async delete(id: number) {
    const response = await productService.DeleteProduct(id);
    if (response) {
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
