import { Order } from "src/modules/order/entities/order.entity";
import { Product } from "src/modules/product/entities/product.entity";
import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class OrderDetail {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    unitPrice: number;

    @Column()
    quantity: number;

    @Column({default: true})
    isActive: boolean;

    @ManyToOne(() => Product, product => product.orderDetails, {cascade: true, nullable: false})
    product: Product;

    @ManyToOne(() => Order, order => order.orderDetails, {cascade: true})
    order: Order;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;
}
