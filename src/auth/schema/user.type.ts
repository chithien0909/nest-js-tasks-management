import { ArgsType, Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class UserType {
  @Field(id => ID)
  id: number;
  @Field()
  username: string;
  @Field()
  password: string;
}
