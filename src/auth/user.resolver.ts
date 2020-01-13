import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserType } from './schema/user.type';
import { UserInput } from './schema/user.input';
import { UserResponse } from './schema/user.response';
import { UserLogin } from './schema/user.login';
import { UserDeleteResult } from './schema/user.deleteResult';
import { ParseIntPipe, SetMetadata, UseGuards } from '@nestjs/common';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly authService: AuthService,
  ) {}
  @Query(returns => [UserType])
  async getAllUser() {
    return this.authService.getAllUser();
  }
  @Query(returns => UserType)
  async findUser(@Args('id') id: number) {
    return this.authService.findById(id);
  }
  @Mutation(returns => UserResponse)
  async signUp(@Args('input') input: UserInput) {
    return this.authService.signUp(input);
  }
  @Mutation(returns => UserLogin)
  async signIn(@Args('input') input: UserInput) {
    return this.authService.signIn(input);
  }
  @Mutation(returns => UserDeleteResult)
  async deleteUser(@Args('id', ParseIntPipe) id: number) {
    return this.authService.deleteUser(id);
  }
}
