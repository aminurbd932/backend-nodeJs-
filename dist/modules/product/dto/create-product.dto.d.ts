import { Category } from "src/modules/category/entities/category.entity";
export declare class CreateProductDto {
    id?: number;
    category: Category;
    productCode: string;
    productName: string;
    shortDescription: string;
    currentSalePrice: number;
    actualPrice: number;
    quantity: number;
    createdBy: number;
}
