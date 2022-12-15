import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from "../roles/roles-auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        // try {
        //     const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
        //         context.getHandler(),
        //         context.getClass(),
        //     ]);
        //     if (!requiredRoles) {
        //         return true;
        //     }
        //
        //     const { user } = context.switchToHttp().getRequest();
        //     return requiredRoles.some((role) => user.roles?.includes(role));
        // } catch (e) {
        //
        //     console.log(e); // TODO позже убрать
        //
        //     throw new HttpException( 'Нет доступа', HttpStatus.FORBIDDEN);
        // }
        // TODO доделать авторизацию
        const roles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());

        return true;
    }
}