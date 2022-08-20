import { Body, Controller, Get, Post } from '@nestjs/common';
import { title } from 'process';
import { CreateTaskeDto } from './dtos/create-task-dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Post()
  testPostRequest(@Body() createtaskTod: CreateTaskeDto): Task {
    return this.taskService.createTask(createtaskTod);
  }
}
