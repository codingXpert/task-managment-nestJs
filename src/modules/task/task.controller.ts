import { Controller, Get ,Param } from '@nestjs/common';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController{
    constructor(private taskService: TaskService){}

    @Get(':ask')
    getAllTask():Task[]{
        return this.taskService.getAllTask();
    }
}
