import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Order } from "src/modules/order/entities/order.entity";
import { Product } from "src/modules/product/entities/product.entity";

export class CreateOrderDetailDto {
    @ApiPropertyOptional()
    unitPrice: number;

    @ApiProperty()
    quantity: number;

    @ApiProperty()
    product: Product;

    @ApiProperty()
    order: Order;
}
