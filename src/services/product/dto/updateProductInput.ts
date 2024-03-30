export interface IUpdateProductInput {
  productId: number;
  categoryId: number;
  brandId: number;
  productName?: string;
  productCode?: string;
  description?: string;
  imageFile?: any;
  price?: number;
  discount?: number;
  quantity?: number;
  inStock?: boolean;
}
