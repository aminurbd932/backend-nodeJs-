import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty()
    categoryName: string;

    @ApiPropertyOptional()
    shortDescription:string;
    isActive:boolean;
}
