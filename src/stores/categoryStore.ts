import { action, observable } from "mobx";
import categoryService from "@/services/category/categoryService";
import type {
  CategoryOutputDto,
  ICreateOrUpdateCategoryInput,
} from "@/services/category/dto";
import type IResponseWithPagination from "@/services/responseWithPaginationDto";
class CategoryStore {
  @observable categories!: IResponseWithPagination<CategoryOutputDto>;
  @observable editCategory: ICreateOrUpdateCategoryInput | null = null;

  @action
  async get(id: any) {
    const response = await categoryService.GetCategory(id);
    if (response) {
      this.editCategory = response;
    }
  }

  @action
  async getAll(pageNumber: number, pageSize: number) {
    const response = await categoryService.GetCategories(pageNumber, pageSize);
    this.categories.items = response.items;
  }

  @action
  async create(input: ICreateOrUpdateCategoryInput) {
    const response = await categoryService.CreateCategory(input);
    if (response) {
      this.editCategory = null;
      this.categories.items.map((category: any) => {
        if (category.categoryId == response.categoryId) category = response;
        return category;
      });
    }
  }

  @action
  async update(id: any, input: ICreateOrUpdateCategoryInput) {
    const response = await categoryService.UpdateCategory(id, input);
    if (response) {
      this.categories.items.map((item: any) => {
        if (item.categoryId == input.categoryId) item = response;
        return item;
      });
    }
  }

  @action
  async delete(id: any) {
    const response = await categoryService.DeleteCategory(id);
    if (response) {
      this.editCategory = null;
    }
  }

  @action
  async createCategory() {
    this.editCategory = {
      categoryName: "",
    };
  }

  @action
  cleanUp() {
    this.editCategory = null;
  }
}

export default CategoryStore;
