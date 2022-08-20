/* eslint-disable prettier/prettier */
import { TaskStatus } from '../task.model';

export class GetTasksFiltterDto {
  status?: TaskStatus;
  search?: string;
}
