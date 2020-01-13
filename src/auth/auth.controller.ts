import { Body, Controller, Get, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { RolesGuard } from './roles.guard';
import { UserRole } from './enum/user-role.enum';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from './roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}
  @Post('/signup')
  signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentialsDto);
  }
  @Post('signin')
  signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> {
    return this.authService.signIn(authCredentialsDto);
  }
  @Get()
  @Roles(UserRole.SUPER_ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  getUser() {
    return this.authService.getAllUser();
  }
  // @Post('/test')
  // @UseGuards(AuthGuard('jwt'))
  // test(@GetUser() user: User) {
  //   console.log(user);
  // }
}
