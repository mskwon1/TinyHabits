import { IsOptional, IsString } from 'class-validator';

export class UpdateAspirationDto {
  @IsOptional()
  @IsString()
  name?: string;
}
