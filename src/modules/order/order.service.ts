import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetail } from '../order-detail/entities/order-detail.entity';
import { OrderDetailsRepository } from '../order-detail/order-detail.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { OrdersRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrdersRepository)
    private readonly ordersRepository: OrdersRepository,
    private readonly orderDetailsRepository: OrderDetailsRepository
  ) {
  }
 async create(createOrderDto: CreateOrderDto) {
   // return 'This action adds a new order';
   const order = new Order();
    order.userId = 1;
    order.lessDiscount = createOrderDto.lessDiscount;
    order.orderNumber = Math.floor(1000 + Math.random() * 9000).toString();
    order.shippingName = createOrderDto.shippingName;
    order.shippingPhoneNo = createOrderDto.shippingPhoneNo;
    order.shippingAddress = createOrderDto.shippingAddress;
    const savedOrder = await this.ordersRepository.save(order);

    let orderDetailsList = [];
    createOrderDto.orderDetails.forEach(orderDet => {
      const orderDetails = new OrderDetail();
      orderDetails.product = orderDet.product;
      orderDetails.quantity = orderDet.quantity;
      orderDetails.order = savedOrder;
      orderDetailsList.push(orderDetails);
      // this.updateProductCount(orderDet.product, orderDet.quantity);
    });
    await this.orderDetailsRepository.save(orderDetailsList);
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
