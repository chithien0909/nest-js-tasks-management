import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class UserLogin {
  @Field()
  username: string;
  @Field()
  accessToken: string;
}
