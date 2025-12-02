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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const create_post_dto_1 = require("./dto/create-post.dto");
const response_dto_1 = require("../common/dto/response.dto");
const query_dto_1 = require("../common/dto/query.dto");
let PostsController = class PostsController {
    postsService;
    constructor(postsService) {
        this.postsService = postsService;
    }
    async create(createPostDto) {
        const post = await this.postsService.create(createPostDto);
        if (!post)
            throw new common_1.NotFoundException('Category not found or error creating post');
        return new response_dto_1.SuccessResponseDto('Post created successfully', post);
    }
    async findAll(query) {
        if (query.limit && query.limit > 100) {
            query.limit = 100;
        }
        const result = await this.postsService.findAll(query);
        if (!result)
            throw new common_1.InternalServerErrorException('Could not retrieve posts');
        return new response_dto_1.SuccessResponseDto('Posts retrieved successfully', result);
    }
    async findOne(id) {
        const post = await this.postsService.findOne(id);
        if (!post)
            throw new common_1.NotFoundException('Post not found');
        return new response_dto_1.SuccessResponseDto('Post retrieved successfully', post);
    }
    async update(id, updatePostDto) {
        const updated = await this.postsService.update(id, updatePostDto);
        if (!updated)
            throw new common_1.NotFoundException('Post not found or category not valid');
        return new response_dto_1.SuccessResponseDto('Post updated successfully', updated);
    }
    async remove(id) {
        const deleted = await this.postsService.remove(id);
        if (!deleted)
            throw new common_1.NotFoundException('Post not found or could not be deleted');
        return new response_dto_1.SuccessResponseDto('Post deleted successfully', id);
    }
};
exports.PostsController = PostsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.QueryDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "remove", null);
exports.PostsController = PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
//# sourceMappingURL=posts.controller.js.map