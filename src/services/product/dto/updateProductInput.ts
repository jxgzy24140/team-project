export interface IUpdateProductInput {
  productId: number;
  categoryId: number;
  productName?: string;
  description?: string;
  imageFile?: any;
  price?: number;
  discount?: number;
  quantity?: number;
  inStock?: boolean;
}
