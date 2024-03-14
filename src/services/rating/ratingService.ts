import http from "@/services/httpService";
import {
  ICreateRatingInput,
  IUpdateRatingInput,
  RatingOutputDto,
} from "@/services/rating/dto";
import IResponseWithPagination from "@/services/responseWithPaginationDto";
import { IHttpRequest } from "../httpRequestDto";
class RatingService {
  public async createRating(
    input: ICreateRatingInput
  ): Promise<IHttpRequest<RatingOutputDto>> {
    const response = await http.post("ratings", input);
    return response.data;
  }

  public async updateRating(
    input: IUpdateRatingInput
  ): Promise<IHttpRequest<RatingOutputDto>> {
    const response = await http.patch("ratings", input);
    return response.data;
  }

  public async deleteRating(
    id: string
  ): Promise<IHttpRequest<RatingOutputDto>> {
    const response = await http.delete(`ratings/${id}`);
    return response.data;
  }

  public async getRating(id: string): Promise<IHttpRequest<RatingOutputDto>> {
    const response = await http.get(`ratings/${id}`);
    return response.data;
  }

  public async getRatings(
    pageNumber: number,
    pageSize: number
  ): Promise<IHttpRequest<IResponseWithPagination<RatingOutputDto>>> {
    const response = await http.get("ratings", {
      params: { pageSize, pageNumber },
    });
    return response.data;
  }
}

export default new RatingService();
