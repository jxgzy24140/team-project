export interface IProductOutput {
  productId: number;
  categoryId: number;
  categoryName: string;
  productName: string;
  description: string;
  image: string;
  price: number;
  discount: number;
  quantity: number;
  inStock: boolean;
  creationId: number;
  creatorName: string;
  createdDate: Date;
  updatedDate?: Date;
  deletedDate?: Date;
  deletedUserId?: number;
}
