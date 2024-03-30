export interface IRatingOutput {
  ratingId: number;
  stars: number;
  ratingText: string;
  createDate: Date;
  orderDetailId: number;

  customerId: string;
  userName: string;
  avatar: string;

  productId: number;
  productName: string;
  image: string;
}
