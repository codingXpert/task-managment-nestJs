import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getAllTask(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, desc } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      desc,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  getTaskById(id: string): Task{
    const task = this.tasks.find((task) => task.id === id);
    console.log(task);
    
    return this.tasks.find((task) => task.id === id);
  }
}
