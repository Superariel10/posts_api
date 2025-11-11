import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {
    getMyFirstGet(): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics',
            function: 'Get Example',
        };
    }
    getConParametros(parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics',
            function: 'Get con Parametros',
            parametroRecibido: parametro
        };
    }
    postFunction(bodyPost: object): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo post',
            function: 'Ejemplo de peticion Post',
            bodyRecibido: bodyPost
        };
    }
    putFunction(bodyPost: object, parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo put',
            function: 'Ejemplo de peticion Put',
            bodyRecibido: bodyPost,
            parametro: parametro
        };
    }
    deleteFunction(parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo delete',
            function: 'Ejemplo de peticion Delete',
            parametro: parametro
        };
    }
}