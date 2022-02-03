import {EntityRepository, Repository} from "typeorm";
import {OrderDetail} from "./entities/order-detail.entity";

@EntityRepository(OrderDetail)
export class OrderDetailsRepository extends Repository<OrderDetail> {

}