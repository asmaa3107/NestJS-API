/* eslint-disable prettier/prettier */
import { TaskStatus } from '../task-status.enum';

export class GetTasksFiltterDto {
  status?: TaskStatus;
  search?: string;
}
