import {Product} from "./product";
import { inventoryService } from "../services/inventoryService";

export class inventory implements inventoryService{
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProduct(id: string): void {
    this.products = this.products.filter(product => product.id !== id);
  }

  findProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  ListAllProducts(): Book[] {
    return this.products;
  }
}