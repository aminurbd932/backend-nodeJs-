import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoriesRepository } from './category.repository';
import { Category } from './entities/category.entity';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
export declare class CategoryService {
    private categoriesRepository;
    constructor(categoriesRepository: CategoriesRepository);
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(options: IPaginationOptions): Promise<Pagination<Category>>;
    findOne(id: number): Promise<Category>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
