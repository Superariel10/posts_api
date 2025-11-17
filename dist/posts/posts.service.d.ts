import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Category } from '../categories/categories.entity';
export declare class PostsService {
    private readonly postRepository;
    private readonly categoryRepository;
    constructor(postRepository: Repository<Post>, categoryRepository: Repository<Category>);
    create(createPostDto: CreatePostDto): Promise<Post>;
    findAll(): Promise<Post[]>;
    findOne(id: string): Promise<Post | null>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<Post>;
    remove(id: string): Promise<Post>;
}
