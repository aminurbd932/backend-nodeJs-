import { OrderDetail } from "src/modules/order-detail/entities/order-detail.entity";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orderNumber: string;

    @Column()
    lessDiscount: number;

    @Column({nullable: false})
    shippingName: string;

    @Column({nullable: false})
    shippingPhoneNo: string;

    @Column({nullable: false})
    shippingAddress: string;

    @Column({default: true})
    isActive: boolean;

    @OneToMany(() => OrderDetail, orderDetails => orderDetails.order)
    orderDetails: OrderDetail[];

    @Column({nullable: false})
    userId: number;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;

    @DeleteDateColumn({type: 'timestamp'})
    deletedAt: Date;
}
