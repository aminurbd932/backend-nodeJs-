import { OrderDetail } from "src/modules/order-detail/entities/order-detail.entity";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Category} from "../../category/entities/category.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 45, unique: true, nullable: true})
    productCode: string;

    @Column({length: 45, nullable: true})
    productName: string;

    @Column("text", {nullable: true})
    shortDescription: string;

    @Column({default: 0})
    currentSalePrice: number;

    @Column({default: 0})
    actualPrice: number;

    @Column({default: 0})
    quantity: number;

    @Column({default: true})
    isActive: boolean;

    @ManyToOne(() => Category, category => category.products, {cascade: true})
    @JoinColumn()  // this is used for reverse way data retrieval
    category: Category;

    @OneToMany(() => OrderDetail, orderDetail => orderDetail.product)
    orderDetails: OrderDetail[];

    @Column()
    createdBy: number;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date

    @Column({default: 0})
    updatedBy: number;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;

    @Column({default: 0})
    deletedBy: number;

    @DeleteDateColumn({type: 'timestamp'})
    deletedAt: Date;
}

