export interface IUpdateProductInput {
  CategoryId: number;
  ProductName?: string;
  Description?: string;
  Image?: string;
  Price?: number;
  Discount?: number;
  Quantity?: number;
  InStock?: boolean;
}
