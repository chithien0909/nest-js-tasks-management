import { registerEnumType } from 'type-graphql';
import { TasksStatus } from '../task-status.enum';

registerEnumType(TasksStatus, {
  name: 'TasksStatus',
  description: 'Task status',
});
