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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./post.entity");
const categories_entity_1 = require("../categories/categories.entity");
let PostsService = class PostsService {
    postRepository;
    categoryRepository;
    constructor(postRepository, categoryRepository) {
        this.postRepository = postRepository;
        this.categoryRepository = categoryRepository;
    }
    async create(createPostDto) {
        const category = await this.categoryRepository.findOne({ where: { id: createPostDto.categoryId } });
        if (!category)
            throw new common_1.NotFoundException('Categoría no encontrada');
        const post = this.postRepository.create({
            title: createPostDto.title,
            content: createPostDto.content,
            category,
        });
        return this.postRepository.save(post);
    }
    findAll() {
        return this.postRepository.find({ relations: ['category'] });
    }
    findOne(id) {
        return this.postRepository.findOne({ where: { id }, relations: ['category'] });
    }
    async update(id, updatePostDto) {
        const post = await this.postRepository.findOne({ where: { id }, relations: ['category'] });
        if (!post)
            throw new common_1.NotFoundException('Post no encontrado');
        if (updatePostDto.categoryId) {
            const category = await this.categoryRepository.findOne({ where: { id: updatePostDto.categoryId } });
            if (!category)
                throw new common_1.NotFoundException('Categoría no encontrada');
            post.category = category;
        }
        Object.assign(post, updatePostDto);
        return this.postRepository.save(post);
    }
    async remove(id) {
        const post = await this.postRepository.findOne({ where: { id } });
        if (!post)
            throw new common_1.NotFoundException('Post no encontrado');
        return this.postRepository.remove(post);
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(1, (0, typeorm_1.InjectRepository)(categories_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PostsService);
//# sourceMappingURL=posts.service.js.map