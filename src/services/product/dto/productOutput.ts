export interface ICreateOrUpdateProductOutput {
  productId: number;
  categoryId: number;
  productName: string;
  description: string;
  image: string;
  price: number;
  discount: number;
  quantity: number;
  inStock: boolean;
  creationId: number;
  createdDate: Date;
  updatedDate: Date;
  deletedDate: Date;
  deletedUserId: number;
}
