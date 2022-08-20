import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTaskeDto } from './dtos/create-task-dto';
import { GetTasksFiltterDto } from './dtos/get-task-filters.dto';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFiltterDto): Task[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();

    // do something with status
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        }
        return false;
      });
    }

    return tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
  deleteTaskById(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  updateTask(id: string, status: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
  //auto generate id using uuid pakage
  createTask(createTaskdto: CreateTaskeDto): Task {
    const { title, description } = createTaskdto;
    const task: Task = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatus.DONE,
    };
    this.tasks.push(task);
    return task;
  }
}
