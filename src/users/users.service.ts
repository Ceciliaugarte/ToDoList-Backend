import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  index() {
    //Busca en base de datos

    return 'Obtaining all users';
  }

  show(id: number) {
    //Busca en base de datos
    const UserFound = 'Obtaining one user';
    if (!UserFound) {
      throw new NotFoundException('User not found');
    }

    return UserFound;
  }

  store(user: string) {
    return 'User created';
  }
  update() {
    return 'User updated';
  }
  updateStatus() {
    return 'User status updated';
  }
  destroy() {
    try {
      return 'User deleted';
    } catch (error) {
      throw new NotFoundException('User was not found');
    }
  }
}
