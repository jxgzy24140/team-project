import http from "@/services/httpService";
import { ICreateOrUpdateCategoryInput } from "./dto/createOrUpdateCategoryInput";
import { ICategoryOutput } from "./dto/categoryOutput";

class CategoryService {
  public async CreateCategory(
    input: ICreateOrUpdateCategoryInput
  ): Promise<ICategoryOutput> {
    const response = await http.post("api/category", input);
    return response.data.result;
  }

  public async GetCategory(id: string): Promise<ICategoryOutput> {
    const response = await http.get(`api/category/${id}`);
    return response.data.result;
  }
}

export default CategoryService;
