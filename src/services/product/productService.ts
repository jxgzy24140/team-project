import http from "@/services/httpService";
import IResponseWithPagination from "@/services/responseWithPaginationDto";
import {
  ICreateProductInput,
  IUpdateProductInput,
  ProductOutputDto,
} from "@/services/product/dto";
class ProductService {
  public async CreateProduct(
    input: ICreateProductInput
  ): Promise<ProductOutputDto> {
    const response = await http.post("api/category", input);
    return response.data.result;
  }

  public async UpdateProduct(
    input: IUpdateProductInput
  ): Promise<ProductOutputDto> {
    const response = await http.patch("api/category", input);
    return response.data.result;
  }

  public async DeleteProduct(id: string): Promise<ProductOutputDto> {
    const response = await http.delete(`api/category/${id}`);
    return response.data.result;
  }

  public async GetProduct(id: string): Promise<ProductOutputDto> {
    const response = await http.get(`api/category/${id}`);
    return response.data.result;
  }

  public async GetProducts(
    pageNumber: number,
    pageSize: number
  ): Promise<IResponseWithPagination<ProductOutputDto>> {
    const response = await http.get("api/categories", {
      params: { pageSize, pageNumber },
    });
    return response.data.result;
  }
}

export default new ProductService();
