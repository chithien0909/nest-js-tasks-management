import { Field, ID, ObjectType } from 'type-graphql';
import { DeleteResult } from 'typeorm';

@ObjectType()
export class UserDeleteResult {
  @Field()
  affected?: number | null;
}
