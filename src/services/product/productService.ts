import http from "@/services/httpService";
import IResponseWithPagination from "@/services/responseWithPaginationDto";
import {
  ICreateProductInput,
  IUpdateProductInput,
  ProductOutputDto,
} from "@/services/product/dto";
import { IHttpRequest } from "../httpRequestDto";
class ProductService {
  public async createProduct(
    input: ICreateProductInput
  ): Promise<IHttpRequest<ProductOutputDto>> {
    const response = await http.post("products", input);
    return response.data;
  }

  public async updateProduct(
    id: number,
    input: IUpdateProductInput
  ): Promise<IHttpRequest<ProductOutputDto>> {
    const response = await http.patch(`products/${id}`, input);
    return response.data;
  }

  public async deleteProduct(
    id: number
  ): Promise<IHttpRequest<ProductOutputDto>> {
    const response = await http.delete(`products/${id}`);
    return response.data;
  }

  public async getProduct(id: number): Promise<IHttpRequest<ProductOutputDto>> {
    const response = await http.get(`products/${id}`);
    return response.data;
  }

  public async getProducts(
    pageNumber: number,
    pageSize: number
  ): Promise<IHttpRequest<IResponseWithPagination<ProductOutputDto>>> {
    const response = await http.get("products", {
      params: { pageSize, pageNumber },
    });
    return response.data;
  }
}

export default new ProductService();
