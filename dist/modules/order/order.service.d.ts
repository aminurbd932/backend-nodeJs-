import { OrderDetailsRepository } from '../order-detail/order-detail.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersRepository } from './order.repository';
export declare class OrderService {
    private readonly ordersRepository;
    private readonly orderDetailsRepository;
    constructor(ordersRepository: OrdersRepository, orderDetailsRepository: OrderDetailsRepository);
    create(createOrderDto: CreateOrderDto): Promise<void>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrderDto: UpdateOrderDto): string;
    remove(id: number): string;
}
