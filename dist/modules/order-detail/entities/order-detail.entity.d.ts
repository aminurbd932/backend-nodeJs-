import { Order } from "src/modules/order/entities/order.entity";
import { Product } from "src/modules/product/entities/product.entity";
export declare class OrderDetail {
    id: number;
    unitPrice: number;
    quantity: number;
    isActive: boolean;
    product: Product;
    order: Order;
    createdAt: Date;
    updatedAt: Date;
}
