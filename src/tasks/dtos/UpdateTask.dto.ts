import { TaskStatus } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
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
