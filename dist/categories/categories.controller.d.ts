import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("./categories.entity").Category>;
    findAll(): Promise<import("./categories.entity").Category[]>;
    findOne(id: string): Promise<import("./categories.entity").Category | null>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("./categories.entity").Category | null>;
    remove(id: string): Promise<import("./categories.entity").Category | null>;
}
