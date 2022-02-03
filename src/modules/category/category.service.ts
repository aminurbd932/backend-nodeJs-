import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {CategoriesRepository} from './category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import {
  IPaginationOptions,
  paginate,
  paginateRaw,
  Pagination,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: CategoriesRepository
) {
}

  async create(createCategoryDto: CreateCategoryDto) {
    const {
      categoryName,
      shortDescription,
      isActive,
  } = createCategoryDto;

    const category = new Category();
    category.categoryName = categoryName;
    category.shortDescription = shortDescription;
    category.isActive = isActive;
    category.createdBy = 1;
    return await this.categoriesRepository.save(category);
  }

  findAll(options: IPaginationOptions): Promise<Pagination<Category>> {
    return paginate<Category>(this.categoriesRepository, options, {
      order: {
          createdAt: 'DESC',
      },
    });
  }

 async findOne(id: number): Promise<Category> {
    const resp = await this.categoriesRepository.findOne({
      where: {id: id}
  });
    if (!resp) {
        throw new NotFoundException(`Category #${id} not found`);
    }
    return resp;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) : Promise<Category>{
    const {
      categoryName,
      shortDescription,
      isActive,
  } = updateCategoryDto;
  const category = await this.categoriesRepository.findOne(id);
  if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
  }
    category.categoryName = categoryName;
    category.shortDescription = shortDescription;
    category.isActive = isActive;
    category.updatedBy = 2;

    return this.categoriesRepository.save(category);
  }

  async remove(id: number) {
    const category = await this.categoriesRepository.findOne(id);
        if (!category) {
            throw new NotFoundException(`Category #${id} not found`);
        }
        return this.categoriesRepository.softDelete(id);
  }
}

