import { TaskStatus } from '@prisma/client';
import { Transform } from 'class-transformer';
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

  /*   @Transform(({ value }) => {
    const [month, day, year] = value.split('-').map(Number);
    const formatedDate = new Date(year, month - 1, day);
    console.log(formatedDate);
  }) */
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
