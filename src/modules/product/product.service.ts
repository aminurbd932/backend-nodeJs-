import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductsRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductsRepository)
    private readonly productsRepository: ProductsRepository
) {
}
  async create(createProductDto: CreateProductDto) {
    const {
      productCode,
      productName,
      category,
      shortDescription,
      currentSalePrice,
      actualPrice,
      quantity
  } = createProductDto;
    const product = new Product();
      product.category = category;
      product.productCode = productCode;
      product.productName = productName;
      product.shortDescription = shortDescription;
      product.currentSalePrice = currentSalePrice;
      product.actualPrice = actualPrice;
      product.quantity = quantity;
      product.createdBy = 1;
      return await this.productsRepository.save(product);
  }

  findAll(options: IPaginationOptions): Promise<Pagination<Product>> {
    return paginate<Product>(this.productsRepository, options, {
      relations: ['category'],
      order: {
          createdAt: 'DESC',
      },
    });
  }

  async findOne(id: number) : Promise<Product>{
    const resp = await this.productsRepository.findOne({
      relations: ['category'],
      where: {id: id}
  });
    if (!resp) {
        throw new NotFoundException(`Product #${id} not found`);
    }
    return resp;
  }

 async update(id: number, updateProductDto: UpdateProductDto) {
    const {
      category,
      productCode,
      productName,
      shortDescription,
      currentSalePrice,
      actualPrice,
      quantity
  } = updateProductDto;
    const product = await this.productsRepository.findOne(id);
    if (!product) {
        throw new NotFoundException(`Category #${id} not found`);
    }
      product.category = category;
      product.productCode = productCode;
      product.productName = productName;
      product.shortDescription = shortDescription;
      product.currentSalePrice = currentSalePrice;
      product.actualPrice = actualPrice;
      product.quantity = quantity;
      product.updatedBy = 2;
      return await this.productsRepository.save(product);
  }

  async remove(id: number) {
    const product = await this.productsRepository.findOne(id);
      if (!product) {
          throw new NotFoundException(`Product #${id} not found`);
      }
      return this.productsRepository.softDelete(id);
  }
}
