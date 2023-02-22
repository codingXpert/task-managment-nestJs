import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getAllTask():Task[]{
   return this.tasks;
  }

  createTask(title: string , desc: string):Task{
    const task:Task = {
    id:uuid(),
    title ,
    desc ,
    status: TaskStatus.OPEN
    }
    this.tasks.push(task);
    return task;
}
}
