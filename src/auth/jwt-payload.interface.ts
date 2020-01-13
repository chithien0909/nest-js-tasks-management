import { UserRole } from './enum/user-role.enum';

export class JwtPayload {
  username: string;
  fullname: string;
  role: UserRole.SUPER_ADMIN | UserRole.ADMIN | UserRole.GUEST;
}
