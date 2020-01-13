import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { DeleteResult } from 'typeorm';

@Injectable()
export class AuthService {
  private logger = new Logger();
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<any> {
    return this.userRepository.signUp(authCredentialsDto);
  }
  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> {
    const {username, fullname, role} = await this.userRepository.validateUserPassword(authCredentialsDto);

    if (!username ) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload: JwtPayload = { username, role, fullname };
    const accessToken = await this.jwtService.sign(payload);
    this.logger.debug(`Generated JWT token with payload ${JSON.stringify(payload)}`);
    return { accessToken };
  }
  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }
  async deleteUser(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
  async getAllUser(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
