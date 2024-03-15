export interface ICreateProductInput {
  categoryId: number;
  productName: string;
  description: string;
  imageFile: string;
  price: number;
  discount: number;
  quantity: number;
  inStock: boolean;
  creationId: number;
}
