import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskeDto } from './dtos/create-task-dto';
import { GetTasksFiltterDto } from './dtos/get-task-filters.dto';
import { TaskStatus } from './task-status.enum';
import { TasksService } from './tasks.service';
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFiltterDto): Task[] {
  //   //if we have any filters defiens call getTAskwithFilter atherwise call getAll
  //   //when send url send parameter after '?' ex : ?title=''
  //   if (Object.keys(filterDto).length) {
  //     return this.taskService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.taskService.getAllTasks();
  //   }
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   //send id after '/'
  //   return this.taskService.getTaskById(id);
  // }
  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string): void {
  //   this.taskService.deleteTaskById(id);
  // }

  // @Post()
  // createTaskRequest(@Body() createtaskTod: CreateTaskeDto): Task {
  //   return this.taskService.createTask(createtaskTod);
  // }

  // @Patch('/:id/status')
  // updateTask(
  //   @Param('id') id: string,
  //   @Body('status') status: TaskStatus,
  // ): Task {
  //   return this.taskService.updateTask(id, status);
  // }
}
// getAllTasks(): Task[] {
//   return this.taskService.getAllTasks();
// }
