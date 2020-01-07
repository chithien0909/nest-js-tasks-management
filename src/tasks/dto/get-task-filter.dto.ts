import { TasksStatus } from '../task-status.enum';
import { IsEmpty, IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class GetTaskFilterDto {
  @IsOptional()
  @IsIn([TasksStatus.OPEN, TasksStatus.IN_PROGRESS, TasksStatus.DONE])
  status: TasksStatus;
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
