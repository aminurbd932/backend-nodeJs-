import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { OrderDetail } from "src/modules/order-detail/entities/order-detail.entity";

export class CreateOrderDto {
    @ApiProperty()
    orderNumber: string;

    @ApiPropertyOptional()
    lessDiscount: number;

    @ApiProperty()
    shippingName: string;

    @ApiProperty()
    shippingPhoneNo: string;

    @ApiProperty()
    shippingAddress: string;

    @ApiProperty()
    orderDetails: OrderDetail[];
}
