import {Test, TestingModule} from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService',() => {
    let service: AppService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AppService],
        }).compile();
        service = module.get<AppService>(AppService);
    });

    it('deberia estar definido', () => {
        expect(service).toBeDefined();
    });

    it('getHello() deberia retornar el mensaje esperado', () => {
        expect(service.getHealth()).toBe(
            {
                service:"posts-api service",
                message:"Online"
            },
        );
    });

    it('getHello() deberia retornar un objeto', () => {
        const result = service.getHealth();
        expect(typeof result).toBe('object');
    });
});