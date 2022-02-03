import { Product } from "src/modules/product/entities/product.entity";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
// import {Group} from "../../groups/entities/group.entity";
// import {Product} from "../../products/entities/product.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 45, unique: true})
    categoryName: string;

    @OneToMany(() => Product, product => product.category)
    products: Product[];

    @Column({length: 255, nullable: true})
    shortDescription: string;

    @Column({default: 1})
    isActive: boolean;

    // @ManyToMany(() => Product, product => product.categories, {cascade: true})
    // @JoinTable()
    // products: Product[];

    @Column()
    createdBy: number;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date

    @Column({default: 0})
    updatedBy: number;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date

    @Column({default: 0})
    deletedBy: number;

    @DeleteDateColumn({type: 'timestamp'})
    deletedAt: Date
}