import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.index();
  }

  @Get('/:id')
  getOneTask(@Param('id') id: string) {
    return this.tasksService.show(parseInt(id));
  }

  @Post()
  CreateTask(@Body() task: string) {
    return this.tasksService.store(task);
  }

  @Put()
  UpdateTask() {
    return this.tasksService.update();
  }

  @Patch()
  UpdateTaskStatus() {
    return this.tasksService.updateStatus();
  }

  @Delete()
  DeleteTask() {
    return this.tasksService.destroy();
  }
}
