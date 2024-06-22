import { Controller, Get } from '@nestjs/common';

@Controller({})
export class UsersController {
  @Get('/users')
  getAllUsers() {
    //Busca en base de datos

    return 'Obtaining all users';
  }
}
