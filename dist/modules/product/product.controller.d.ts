import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiResponse } from 'src/common/response/api.response';
import { Pagination } from 'nestjs-typeorm-paginate';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<ApiResponse>;
    findAll(page?: number, limit?: number): Promise<Pagination<any>>;
    findOne(id: string): Promise<ApiResponse>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<ApiResponse>;
    remove(id: string): Promise<ApiResponse>;
}
