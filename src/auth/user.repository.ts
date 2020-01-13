import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt-payload.interface';
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<any> {
    const { username, password } = authCredentialsDto;
    const user = new User();
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);
    try {
      await user.save();
      delete user.password;
      return {
        user,
        status: 200,
      };
    } catch (error) {
      if (error.code === '23505') { // Duplicate username
        throw new ConflictException('Username already existed');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
  async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<any> {
    const {username, password} = authCredentialsDto;
    const user = await this.findOne({username});
    if (user && await user.validatePassword(password)) {
      return {
        username: user.username,
        role:  user.role,
        fullname: user.fullname,
      };
    } else {
      return null;
    }
  }
  private async hashPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt);
  }
}
