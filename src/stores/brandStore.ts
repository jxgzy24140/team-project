import brandService from "@/services/brand/brandService";
import { action, makeAutoObservable, observable } from "mobx";
import type IResponseWithPagination from "@/services/responseWithPaginationDto";
import type {
  BrandOutputDto,
  ICreateOrUpdateBrandInput,
} from "@/services/brand/dto";

class BrandStore {
  @observable brands!: IResponseWithPagination<BrandOutputDto>;
  @observable editBrand: ICreateOrUpdateBrandInput | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  async get(id: any) {
    const response = await brandService.getBrand(id);
    if (response && response.success && response.data) {
      this.editBrand = response.data;
    }
  }

  @action
  async getAll(pageNumber: number, pageSize: number) {
    const response = await brandService.getBrands(pageNumber, pageSize);
    if (response && response.success && response.data) {
      this.brands = response.data;
    }
  }

  @action
  async create(input: ICreateOrUpdateBrandInput) {
    const response = await brandService.createBrand(input);
    if (response) {
      this.editBrand = null;
      this.brands.items.map((category: any) => {
        if (
          response.success &&
          response.data &&
          category.brandId == response.data.brandId
        )
          category = response;
        return category;
      });
    }
  }

  @action
  async update(id: any, input: ICreateOrUpdateBrandInput) {
    const response = await brandService.updateBrand(id, input);
    if (response) {
      this.brands.items.map((item: any) => {
        if (response.success && response.data && item.brandId == input.brandId)
          item = response.data;
        return item;
      });
    }
  }

  @action
  async delete(id: any) {
    const response = await brandService.deleteBrand(id);
    if (response && response.success && response.data) {
      this.editBrand = null;
      this.brands.items = this.brands.items.map((item) => {
        if (response.data && response.data?.brandId == item.brandId)
          item = response.data;
        return item;
      });
    }
  }

  @action
  async createBrand() {
    this.editBrand = {
      brandName: "",
    };
  }

  @action
  cleanUp() {
    this.editBrand = null;
  }
}

export default BrandStore;
