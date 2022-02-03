"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const product_entity_1 = require("./entities/product.entity");
const product_repository_1 = require("./product.repository");
let ProductService = class ProductService {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async create(createProductDto) {
        const { productCode, productName, category, shortDescription, currentSalePrice, actualPrice, quantity } = createProductDto;
        const product = new product_entity_1.Product();
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
    findAll(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.productsRepository, options, {
            relations: ['category'],
            order: {
                createdAt: 'DESC',
            },
        });
    }
    async findOne(id) {
        const resp = await this.productsRepository.findOne({
            relations: ['category'],
            where: { id: id }
        });
        if (!resp) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        return resp;
    }
    async update(id, updateProductDto) {
        const { category, productCode, productName, shortDescription, currentSalePrice, actualPrice, quantity } = updateProductDto;
        const product = await this.productsRepository.findOne(id);
        if (!product) {
            throw new common_1.NotFoundException(`Category #${id} not found`);
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
    async remove(id) {
        const product = await this.productsRepository.findOne(id);
        if (!product) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        return this.productsRepository.softDelete(id);
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_repository_1.ProductsRepository)),
    __metadata("design:paramtypes", [product_repository_1.ProductsRepository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map