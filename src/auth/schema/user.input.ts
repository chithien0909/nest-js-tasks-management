import { Field, InputType } from 'type-graphql';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

@InputType()
export class UserInput {
  @Field()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;
  @Field()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    { message: 'Password too weak' })
  password: string;
}
