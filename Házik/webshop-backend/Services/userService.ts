import { User } from "../Models/user";
import { Order } from "../Models/order";
import { Product } from "../Models/product";
import { InventoryService } from "./inventoryService";

export class UserService {
    private users: User[] = [];
    private inventoryService: InventoryService;

    constructor(inventoryService: InventoryService) {
        this.inventoryService = inventoryService;
    }

    public createUser(userId: string, name: string, email: string): User {
        const newUser = new User(userId, name, email);
        this.users.push(newUser);
        return newUser;
    }

    public placeOrder(userId: string, productIds: string[]): Order | null {
        const user = this.users.find(user => user.userId === userId);
        if (!user) {
            console.error('User not found');
            return null;
        }

        const products: Product[] = [];
        for (const productId of productIds) {
            const product = this.inventoryService.findProductById(productId);
            if (product) {
                products.push(product);
            } else {
                console.error(`Product with ID ${productId} not found`);
                return null;
            }
        }

        if (products.length === 0) {
            console.error('No products found for the order');
            return null;
        }

        const order = new Order(this.generateOrderId(), products);
        user.placeOrder(order); // Itt feltételezzük, hogy a User osztály rendelkezik egy placeOrder metódussal
        return order;
    }

    private generateOrderId(): string {
        return `order-${Math.random().toString(36).substr(2, 9)}`;
    }
}