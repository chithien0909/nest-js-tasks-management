import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from './enum/user-role.enum';
import { User } from './user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<UserRole[]>('roles', context.getHandler());

    if (!roles || roles.length === 0) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user: User = request.user;

    const hasRole = () => roles.indexOf(user.role) >= 0;

    if (user && user.role && hasRole()) {
      return true;
    }

    throw new HttpException('You do not have permission (Roles)', HttpStatus.UNAUTHORIZED);
  }
}