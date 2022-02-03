import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Category } from "src/modules/category/entities/category.entity";

export class CreateProductDto {
    id?: number;
    @ApiPropertyOptional()
    @ApiProperty()
    category: Category;
    productCode: string;
    @ApiProperty()
    productName: string;
    @ApiPropertyOptional()
    shortDescription: string;
    @ApiPropertyOptional()
    currentSalePrice: number;
    @ApiPropertyOptional()
    actualPrice: number;
    @ApiProperty()
    quantity: number;
   // categories?: Category[];
    createdBy:number;
}
