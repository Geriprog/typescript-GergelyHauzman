import {Product} from "../models/product";

export interface inventoryService{
  addProduct (product: Product): void;
  removeProduct (id: string): void;
  findProductById (id: string): Product | undefined;
  ListAllProducts (): Book[];
}