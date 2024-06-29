import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany({
      include: {
        tasks: {
          select: {
            title: true,
            description: true,
            dueDate: true,
            status: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
  }

  getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        tasks: {
          select: {
            title: true,
            description: true,
            dueDate: true,
            status: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
  }

  createOneUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  async updateUserById(id: number, data: Prisma.UserUpdateInput) {
    const userFound = await this.getUserById(id);
    if (!userFound) {
      throw new HttpException('User not found', 404);
    }
    if (data.username) {
      const userWithSameUsername = await this.prisma.user.findUnique({
        where: { username: data.username as string },
      });
      if (userWithSameUsername && userWithSameUsername.id !== id) {
        throw new HttpException('Username already taken', 400);
      }
    }
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUserById(id: number) {
    const userFound = await this.prisma.user.findUnique({ where: { id } });
    if (!userFound) {
      throw new HttpException('User not found', 404);
    }
    return this.prisma.user.delete({ where: { id } });
  }
}
// asyn wh?
