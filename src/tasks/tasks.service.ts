import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  getTasks() {
    return this.prisma.task.findMany();
  }

  getTaskById(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async createTask(userId: number, data: Prisma.TaskCreateWithoutUserInput) {
    return await this.prisma.task.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async updateTaskById(id: number, data: Prisma.TaskUpdateInput) {
    return await this.prisma.task.update({ where: { id }, data });
  }

  async deleteTaskById(id: number) {
    const task = await this.getTaskById(id);
    if (!task) {
      throw new HttpException('Task not found', 404);
    }
    return await this.prisma.task.delete({ where: { id } });
  }
}
