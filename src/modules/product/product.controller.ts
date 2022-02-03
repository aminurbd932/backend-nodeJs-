import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiResponse } from 'src/common/response/api.response';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ApiPaginateResponse } from 'src/common/response/api.paginate.response';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('add')
  async create(@Body() createProductDto: CreateProductDto) {
    await this.productService.create(createProductDto);
    return new ApiResponse(201, 'Sucessfully created');
  }

  @Get('all')
  async findAll( 
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 25) : Promise<Pagination<any>>{
      limit = limit > 100 ? 100 : limit;
      const response = await this.productService.findAll({page, limit});
    return ApiPaginateResponse(200, 'Product List', response);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = await this.productService.findOne(+id);
    return new ApiResponse(200, null, {item: response});
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    await this.productService.update(+id, updateProductDto);
    return new ApiResponse(201, 'Sucessfully updated');
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.productService.remove(+id);
    return new ApiResponse(200, 'Sucessfully deleted');
  }
}
