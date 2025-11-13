import { BasicsService } from './basics.service';
export declare class BasicsController {
    private readonly basicsService;
    constructor(basicsService: BasicsService);
    getMyFirstGet(): object;
    getConParametros(parametro: string): object;
    create(bodyPost: object): object;
    update(bodyPost: object, id: string): object;
    delete(id: string): object;
    calculotriangulo(bodyPost: object): object;
    areaRectangulo(ancho: number, alto: number): object;
}
