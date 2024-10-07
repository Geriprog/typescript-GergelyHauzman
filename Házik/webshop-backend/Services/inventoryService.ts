import { Product } from "../Models/product";

export class InventoryService {
    private products: Product[] = [];

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public removeProductById(productId: string): void {
        this.products = this.products.filter(product => product.id !== productId);
    }

    // További metódusok implementálása szükséges
}