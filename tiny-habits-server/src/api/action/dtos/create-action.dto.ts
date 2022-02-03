import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateActionDto {
  @Type(() => Number)
  @IsNumber()
  aspirationId: number;

  @IsString()
  name: string;
}
