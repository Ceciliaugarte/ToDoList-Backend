import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dtos/CreateTask.dto';
import { UpdateTaskDto } from './dtos/UpdateTask.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('/tasks')
@UseGuards(AuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAllTasks() {
    try {
      return await this.tasksService.getTasks();
    } catch (err) {
      return `Error finding tasks, ${err.message}`;
    }
  }

  @Get('/:id')
  async getOneTask(@Param('id', ParseIntPipe) id: number) {
    try {
      const task = await this.tasksService.getTaskById(id);
      if (!task) {
        throw new NotFoundException('Task not found');
      }
      return task;
    } catch (err) {
      return `Error finding task, ${err.message}`;
    }
  }

  @Post()
  @UsePipes(ValidationPipe)
  async CreateTask(@Body() { userId, ...createTaskDto }: CreateTaskDto) {
    try {
      return await this.tasksService.createTask(userId, createTaskDto);
    } catch (err) {
      return `Error creating task, ${err.message}`;
    }
  }

  @Patch('/:id')
  UpdateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    try {
      return this.tasksService.updateTaskById(id, updateTaskDto);
    } catch (err) {
      return `Error updating task, ${err.message}`;
    }
  }

  @Delete('/:id')
  DeleteTask(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.tasksService.deleteTaskById(id);
    } catch (err) {
      return `Error deleting task, ${err.message}`;
    }
  }
}
