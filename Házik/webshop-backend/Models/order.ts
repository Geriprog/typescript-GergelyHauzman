import { Product } from "./product";

enum OrderStatus {
    New = "Új",
    Processing = "Feldolgozás alatt",
    Delivered = "Kiszállítva",
}

export class Order {
    private orderId: string;
    private products: Product[];
    private status: OrderStatus;

    constructor(orderId: string, products: Product[]) {
        this.orderId = orderId;
        this.products = products;
        this.status = OrderStatus.New;
    }

    // További metódusok implementálása szükséges
}