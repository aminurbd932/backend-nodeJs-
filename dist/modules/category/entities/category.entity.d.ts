import { Product } from "src/modules/product/entities/product.entity";
export declare class Category {
    id: number;
    categoryName: string;
    products: Product[];
    shortDescription: string;
    isActive: boolean;
    createdBy: number;
    createdAt: Date;
    updatedBy: number;
    updatedAt: Date;
    deletedBy: number;
    deletedAt: Date;
}
