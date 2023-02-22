import { Controller, Get ,Param } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController{
    constructor(private taskService: TaskService){}

    @Get(':ask')
    getAllTask():Task[]{
        return this.taskService.getAllTask();
    }

    //creating a task
    @Post()
    createTask(
        @Body('title') title: string,
        @Body('desc') desc:string,  
    ):Task{
        return this.taskService.createTask(title , desc);
    }
}
