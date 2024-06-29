import { Task } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  password?: string;
  /* 
    @IsString()
  @IsOptional()
  tasks: Task[];  */
}
