import http from "@/services/httpService";
import {
  ICreateOrUpdateBrandInput,
  BrandOutputDto,
} from "@/services/brand/dto";
import IResponseWithPagination from "@/services/responseWithPaginationDto";
import { IHttpRequest } from "../httpRequestDto";

class BrandService {
  public async createBrand(
    input: ICreateOrUpdateBrandInput
  ): Promise<IHttpRequest<BrandOutputDto>> {
    const response = await http.post("brands", input);
    return response.data;
  }

  public async updateBrand(
    id: number,
    input: ICreateOrUpdateBrandInput
  ): Promise<IHttpRequest<BrandOutputDto>> {
    const response = await http.patch(`brands/${id}`, input);
    return response.data;
  }

  public async deleteBrand(id: number): Promise<IHttpRequest<BrandOutputDto>> {
    const response = await http.delete(`brands/${id}`);
    return response.data;
  }

  public async getBrand(id: number): Promise<IHttpRequest<BrandOutputDto>> {
    const response = await http.get(`brands/${id}`);
    return response.data;
  }

  public async getBrands(
    pageNumber: number,
    pageSize: number
  ): Promise<IHttpRequest<IResponseWithPagination<BrandOutputDto>>> {
    const response = await http.get("brands", {
      params: { pageSize, pageNumber },
    });
    return response.data;
  }
}

export default new BrandService();
