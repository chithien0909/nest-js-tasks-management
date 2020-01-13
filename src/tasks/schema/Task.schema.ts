import { Field, ID, ObjectType } from 'type-graphql';
import { TasksStatus } from '../task-status.enum';

@ObjectType()
export class TaskSchema {
  @Field(id => ID)
  id: number;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  status: TasksStatus;
  @Field(id => ID)
  userId: number;
}
