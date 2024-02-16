import categoryService from "@/services/category/categoryService";
import type { ICreateOrUpdateCategoryInput } from "@/services/category/dto";
import { action, observable } from "mobx";

class CategoryStore {
  @observable categories!: any;
  @observable category!: any;

  @action
  async get(id: any) {
    const response = await categoryService.GetCategory(id);
    if (response) {
      this.category = response;
    }
  }

  @action
  async getAll(pageNumber: number, pageSize: number) {
    const response = await categoryService.GetCategories(pageNumber, pageSize);
    this.categories.items = response.result;
  }

  @action
  async update(input: ICreateOrUpdateCategoryInput) {
    const response = await categoryService.UpdateCategory(input);
    if (response) {
      this.categories.map((item: any) => {
        if (item.categoryId == input.categoryId) item = response;
        return item;
      });
    }
  }

  @action
  async delete(id: any) {
    const response = await categoryService.DeleteCategory(id);
    if (response) {
      this.category = null;
    }
  }
}

export default CategoryStore;
