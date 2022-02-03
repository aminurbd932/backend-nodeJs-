import { ApiResponse } from 'src/common/response/api.response';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<ApiResponse>;
    findAll(page?: number, limit?: number): Promise<Pagination<any>>;
    findOne(id: string): Promise<ApiResponse>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<ApiResponse>;
    remove(id: string): Promise<ApiResponse>;
}
