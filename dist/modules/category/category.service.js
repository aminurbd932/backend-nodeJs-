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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_repository_1 = require("./category.repository");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("./entities/category.entity");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let CategoryService = class CategoryService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    async create(createCategoryDto) {
        const { categoryName, shortDescription, isActive, } = createCategoryDto;
        const category = new category_entity_1.Category();
        category.categoryName = categoryName;
        category.shortDescription = shortDescription;
        category.isActive = isActive;
        category.createdBy = 1;
        return await this.categoriesRepository.save(category);
    }
    findAll(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.categoriesRepository, options, {
            order: {
                createdAt: 'DESC',
            },
        });
    }
    async findOne(id) {
        const resp = await this.categoriesRepository.findOne({
            where: { id: id }
        });
        if (!resp) {
            throw new common_1.NotFoundException(`Category #${id} not found`);
        }
        return resp;
    }
    async update(id, updateCategoryDto) {
        const { categoryName, shortDescription, isActive, } = updateCategoryDto;
        const category = await this.categoriesRepository.findOne(id);
        if (!category) {
            throw new common_1.NotFoundException(`Category #${id} not found`);
        }
        category.categoryName = categoryName;
        category.shortDescription = shortDescription;
        category.isActive = isActive;
        category.updatedBy = 2;
        return this.categoriesRepository.save(category);
    }
    async remove(id) {
        const category = await this.categoriesRepository.findOne(id);
        if (!category) {
            throw new common_1.NotFoundException(`Category #${id} not found`);
        }
        return this.categoriesRepository.softDelete(id);
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_repository_1.CategoriesRepository)),
    __metadata("design:paramtypes", [category_repository_1.CategoriesRepository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map