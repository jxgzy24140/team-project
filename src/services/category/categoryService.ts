import http from "@/services/httpService";
import {
  ICreateOrUpdateCategoryInput,
  CategoryOutputDto,
} from "@/services/category/dto";
import IResponseWithPagination from "@/services/responseWithPaginationDto";

class CategoryService {
  public async CreateCategory(
    input: ICreateOrUpdateCategoryInput
  ): Promise<CategoryOutputDto> {
    const response = await http.post("api/category", input);
    return response.data.result;
  }

  public async UpdateCategory(
    id: any,
    input: ICreateOrUpdateCategoryInput
  ): Promise<CategoryOutputDto> {
    const response = await http.patch("api/category");
    return response.data.result;
  }

  public async DeleteCategory(id: string): Promise<CategoryOutputDto> {
    const response = await http.delete(`api/category/${id}`);
    return response.data.result;
  }

  public async GetCategory(id: string): Promise<CategoryOutputDto> {
    const response = await http.get(`api/category/${id}`);
    return response.data.result;
  }

  public async GetCategories(
    pageNumber: number,
    pageSize: number
  ): Promise<IResponseWithPagination<CategoryOutputDto>> {
    const response = await http.get("api/categories", {
      params: { pageSize, pageNumber },
    });
    return response.data.result;
  }
}

export default new CategoryService();
