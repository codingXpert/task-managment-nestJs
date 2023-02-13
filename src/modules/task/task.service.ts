import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';

@Injectable()
export class TaskService {
  private tasks = [];

  getAllTask(){
   return this.tasks;
  }
}
