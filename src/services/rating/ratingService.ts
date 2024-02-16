import http from "@/services/httpService";
import {
  ICreateRatingInput,
  IUpdateRatingInput,
  RatingOutputDto,
} from "@/services/rating/dto";
import IResponseWithPagination from "@/services/responseWithPaginationDto";
class RatingService {
  public async CreateRating(
    input: ICreateRatingInput
  ): Promise<RatingOutputDto> {
    const response = await http.post("api/rating", input);
    return response.data.result;
  }

  public async UpdateRating(
    input: IUpdateRatingInput
  ): Promise<RatingOutputDto> {
    const response = await http.patch("api/rating", input);
    return response.data.result;
  }

  public async DeleteRating(id: string): Promise<RatingOutputDto> {
    const response = await http.delete(`api/rating/${id}`);
    return response.data.result;
  }

  public async GetRating(id: string): Promise<RatingOutputDto> {
    const response = await http.get(`api/rating/${id}`);
    return response.data.result;
  }

  public async GetRatings(
    pageNumber: number,
    pageSize: number
  ): Promise<IResponseWithPagination<RatingOutputDto>> {
    const response = await http.get("api/ratings", {
      params: { pageSize, pageNumber },
    });
    return response.data.result;
  }
}

export default new RatingService();
