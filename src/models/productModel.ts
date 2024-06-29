import { FileModel } from "./fileModel";

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

export interface SubProductModel {
  color: string;
  files: FileModel[];
  id: string;
  imageUrl: string;
  price: string;
  productId: string;
  size: string[];
  quantity:number;
}
