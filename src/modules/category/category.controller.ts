import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { ApiResponse } from 'src/common/response/api.response';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {Pagination} from 'nestjs-typeorm-paginate';
import { ApiPaginateResponse } from 'src/common/response/api.paginate.response';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('add')
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    await this.categoryService.create(createCategoryDto);
    return new ApiResponse(201, 'Sucessfully created');
  }

  @Get('all')
  async findAll(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 25
  ) : Promise<Pagination<any>>{
   // return this.categoryService.findAll();

    limit = limit > 100 ? 100 : limit;
    const response = await this.categoryService.findAll({page, limit});
    return ApiPaginateResponse(200, 'Category List', response);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    //return this.categoryService.findOne(+id);
    const response = await this.categoryService.findOne(+id);
    return new ApiResponse(200, null, {item: response});
  }

  @Put(':id')
 async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
   // return this.categoryService.update(+id, updateCategoryDto);
    await this.categoryService.update(+id, updateCategoryDto);
    return new ApiResponse(201, 'Sucessfully updated');
  }

  @Delete(':id')
 async remove(@Param('id') id: string) {
   // return this.categoryService.remove(+id);
    await this.categoryService.remove(+id);
    return new ApiResponse(200, 'Sucessfully deleted');
  }
}
