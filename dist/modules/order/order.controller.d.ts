import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiResponse } from 'src/common/response/api.response';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: CreateOrderDto): Promise<ApiResponse>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOrderDto: UpdateOrderDto): string;
    remove(id: string): string;
}
