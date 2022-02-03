import { Order } from "src/modules/order/entities/order.entity";
import { Product } from "src/modules/product/entities/product.entity";
export declare class CreateOrderDetailDto {
    unitPrice: number;
    quantity: number;
    product: Product;
    order: Order;
}
