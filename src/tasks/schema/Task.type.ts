import { TasksStatus } from '../task-status.enum';
import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType()
export class TaskType {
  @Field(id => ID)
  id: number;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  status: TasksStatus;
  @Field()
  userId: number;
}
