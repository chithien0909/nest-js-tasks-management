import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { TaskFilter } from './schema/Task-filter';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/user.entity';
import { TaskType } from './schema/Task.type';

@Resolver('Task')
@UseGuards(AuthGuard())
export class TaskResolver {
  constructor(
    private readonly taskService: TasksService,
  ) {}
  @Query(returns => [TaskType])
  async findTaskById(
    @Args('id') id: number,
    @GetUser() user: User) {
    return this.taskService.getTaskById(id, user);
  }
  @Query(returns => [TaskType])
  async findAll() {
    return this.taskService.getAllTasks();
  }
}
