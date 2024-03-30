export interface ICreateProductInput {
  categoryId: number;
  brandId: number;
  productName: string;
  productCode: string;
  description: string;
  imageFile: string;
  price: number;
  discount: number;
  quantity: number;
  inStock: boolean;
  creationId: number;
}
