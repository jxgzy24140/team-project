export interface IProductOutput {
  productId: number;
  categoryId: number;
  categoryName: string;
  brandId: number;
  brandName: string;
  productName: string;
  productCode: string;
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
