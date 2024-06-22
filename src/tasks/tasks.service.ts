import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {
  index() {
    //Busca en base de datos

    return 'Obtaining all tasks';
  }

  show(id: number) {
    //Busca en base de datos
    const TaskFound = 'Obtaining one task';
    if (!TaskFound) {
      throw new NotFoundException('Task not found');
    }

    return TaskFound;
  }

  store(task: string) {
    return 'Task created';
  }
  update() {
    return 'Task updated';
  }
  updateStatus() {
    return 'Task status updated';
  }
  destroy() {
    try {
      return 'Task deleted';
    } catch (error) {
      throw new NotFoundException('Task was not found');
    }
  }
}
