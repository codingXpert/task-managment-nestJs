import { Controller, Get ,Param } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController{
    constructor(private taskService: TaskService){}

    @Get()
    getAllTask():Task[]{
        return this.taskService.getAllTask();
    }

    //creating a task
    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto):Task{
        return this.taskService.createTask(createTaskDto);
    }

    //get task by id
    @Get('/:id')
    getTaskById(@Param('id') id: string): Task{
        return this.taskService.getTaskById(id);
    }
}
