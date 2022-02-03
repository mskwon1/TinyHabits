import { IsOptional, IsString } from 'class-validator';

export class UpdateActionDto {
  @IsOptional()
  @IsString()
  name?: string;
}
