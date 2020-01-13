import { Field, ObjectType } from 'type-graphql';
import { UserType } from './user.type';

@ObjectType()
export class UserResponse {
  @Field()
  user: UserType;
  @Field()
  status: number;
}
