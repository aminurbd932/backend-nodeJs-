import { OrderDetail } from "src/modules/order-detail/entities/order-detail.entity";
export declare class CreateOrderDto {
    orderNumber: string;
    lessDiscount: number;
    shippingName: string;
    shippingPhoneNo: string;
    shippingAddress: string;
    orderDetails: OrderDetail[];
}
