import { TaskStatus } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDateString()
  @IsNotEmpty()
  dueDate: Date;

  @IsEnum(TaskStatus)
  @IsOptional()
  status: TaskStatus = TaskStatus.pending;

  @IsInt()
  userId: number;
}
