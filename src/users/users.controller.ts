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
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.UsersService.index();
  }

  @Get('/:id')
  getOneUser(@Param('id') id: string) {
    return this.UsersService.show(parseInt(id));
  }

  @Post()
  CreateUser(@Body() user: string) {
    return this.UsersService.store(user);
  }

  @Put()
  UpdateUser() {
    return this.UsersService.update();
  }

  @Patch()
  UpdateUserStatus() {
    return this.UsersService.updateStatus();
  }

  @Delete()
  DeleteUser() {
    return this.UsersService.destroy();
  }
}
