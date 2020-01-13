import { TasksStatus } from '../task-status.enum';
import { IsEmpty, IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class TaskFilter {
  @Field()
  @IsOptional()
  @IsIn([TasksStatus.OPEN, TasksStatus.IN_PROGRESS, TasksStatus.DONE])
  status: TasksStatus;
  @Field()
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
