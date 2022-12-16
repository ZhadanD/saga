import {
    Injectable,
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    UnauthorizedException
} from "@nestjs/common";
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from "../roles/roles-auth.decorator";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(private reflector: Reflector, private jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>{
        try {
            const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass(),
            ]);

            if (!requiredRoles) {
                return true;
            }

            const req = context.switchToHttp().getRequest();
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0]
            const token = authHeader.split(' ')[1]

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({message: 'Вы не авторизованы!'})
            }

            const user = this.jwtService.verify(token);
            req.user = user;

            return user.roles.some(role => requiredRoles.includes(role.value));
        } catch (e) {
            throw new HttpException( 'Нет доступа', HttpStatus.FORBIDDEN);
        }
    }
}
