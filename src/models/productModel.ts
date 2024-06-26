export interface ProductModel {
  id: string;
  title: string;
  description: string;
  price: string;
  type: string;
  imageUrl: string;
  files: string[];
  categories: string[];
  rate: string;
  createdAt: number;
  updatedAt: number;
}
