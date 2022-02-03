import { Module } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { OrderDetailController } from './order-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetailsRepository } from './order-detail.repository';
import { OrdersRepository } from '../order/order.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrdersRepository, OrderDetailsRepository])],
  controllers: [OrderDetailController],
  providers: [OrderDetailService],
  exports:[OrderDetailService]
})
export class OrderDetailModule {}
