import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task-.dto';

import { get } from 'http';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  
  @Get()
  index(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  create(@Body() CreateTaskDto: CreateTaskDto): Task {
   return this.tasksService.createTask(CreateTaskDto);
  }
  
  @Get('/:id')
  show(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id)
  }

  @Delete('/:id')
  delete(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id)
  }

  @Patch('/:id/status')
  update(@Param('id') id: string, @Body('status') status: TaskStatus): Task {
    return this.tasksService.updateTask(id, status)
  }

}
