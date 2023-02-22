import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';
import { Task } from './task.model';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getAllTask():Task[]{
   return this.tasks;
  }
}
