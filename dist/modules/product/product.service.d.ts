import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductsRepository } from './product.repository';
export declare class ProductService {
    private readonly productsRepository;
    constructor(productsRepository: ProductsRepository);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(options: IPaginationOptions): Promise<Pagination<Product>>;
    findOne(id: number): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
