import type {
  ICreateRatingInput,
  IUpdateRatingInput,
  RatingOutputDto,
} from "@/services/rating/dto";
import ratingService from "@/services/rating/ratingService";
import type IResponseWithPagination from "@/services/responseWithPaginationDto";
import { action, makeAutoObservable, observable } from "mobx";

class RatingStore {
  @observable ratings!: IResponseWithPagination<RatingOutputDto>;
  @observable rating: RatingOutputDto[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  async createRating(input: ICreateRatingInput[]) {
    const response = await ratingService.createRating(input);
    if (response.success && response.data) {
      return true;
    }
    return false;
  }

  @action
  async updateRating(input: IUpdateRatingInput[]) {
    const response = await ratingService.updateRating(input);
    if (response.success && response.data) {
      this.ratings.items = this.ratings.items.map((item: any) => {
        const foundRating = response.data?.find(
          (rating: any) => rating.ratingId === item.ratingId
        );
        if (foundRating) {
          return foundRating;
        } else {
          return item;
        }
      });
    }
  }

  @action
  async getRatingsForProduct(id: number, pageNumber: number, pageSize: number) {
    const response = await ratingService.getRatingsForProduct(
      id,
      pageNumber,
      pageSize
    );
    if (response.success && response.data) {
      this.ratings = response.data;
    }
  }

  @action
  async getRatingsForOrder(id: number) {
    const response = await ratingService.getRatingsForOrder(id);
    if (response.success && response.data) {
      this.rating = response.data;
    }
  }
}

export default RatingStore;
