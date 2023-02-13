import { Controller, Get ,Param } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController{
    constructor(private taskService: TaskService){}

    @Get(':ask')
    getAllTask(){
        return this.taskService.getAllTask();
    }
}