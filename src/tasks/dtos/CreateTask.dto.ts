import { TaskStatus } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDateString()
  @IsOptional() //despues sacar
  dueDate: Date;

  @IsEnum(TaskStatus)
  @IsOptional()
  status: TaskStatus = TaskStatus.pending;

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;

  @IsInt()
  userId: number;
}
