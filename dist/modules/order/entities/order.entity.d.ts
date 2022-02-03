import { OrderDetail } from "src/modules/order-detail/entities/order-detail.entity";
export declare class Order {
    id: number;
    orderNumber: string;
    lessDiscount: number;
    shippingName: string;
    shippingPhoneNo: string;
    shippingAddress: string;
    isActive: boolean;
    orderDetails: OrderDetail[];
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
