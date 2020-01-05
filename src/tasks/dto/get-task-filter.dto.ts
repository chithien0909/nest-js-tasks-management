import { TasksStatus } from '../tasks.model';
import { IsEmpty, IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class GetTaskFilterDto {
  @IsOptional()
  @IsIn([TasksStatus.OPEN, TasksStatus.IN_PROGRESS, TasksStatus.DONE])
  status: TasksStatus;
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
