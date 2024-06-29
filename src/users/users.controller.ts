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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserDto } from './dtos/UpdateUser.dto copy';

@Controller('/users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  async getAllUsers() {
    try {
      return await this.UsersService.getUsers();
    } catch (err) {
      return `Error finding users, ${err.message}`;
    }
  }

  @Get('/:id')
  async getOneUser(@Param('id', ParseIntPipe) id: number) {
    try {
      const user = await this.UsersService.getUserById(id);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (err) {
      return `Error finding user, ${err.message}`;
    }
  }

  @Post()
  @UsePipes(ValidationPipe)
  async CreateUser(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.UsersService.createOneUser(createUserDto);
    } catch (err) {
      return `Error creating users, ${err.message}`;
    }
  }

  @Patch('/:id')
  async UpdateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      return await this.UsersService.updateUserById(id, updateUserDto);
    } catch (err) {
      return `Error updating users, ${err.message}`;
    }
  }

  @Delete('/:id')
  async DeleteUser(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.UsersService.deleteUserById(id);
    } catch (err) {
      return `Error deleting user: ${err.message}`;
    }
  }
}
