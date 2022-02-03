import { OrderDetail } from "src/modules/order-detail/entities/order-detail.entity";
import { Category } from "../../category/entities/category.entity";
export declare class Product {
    id: number;
    productCode: string;
    productName: string;
    shortDescription: string;
    currentSalePrice: number;
    actualPrice: number;
    quantity: number;
    isActive: boolean;
    category: Category;
    orderDetails: OrderDetail[];
    createdBy: number;
    createdAt: Date;
    updatedBy: number;
    updatedAt: Date;
    deletedBy: number;
    deletedAt: Date;
}
