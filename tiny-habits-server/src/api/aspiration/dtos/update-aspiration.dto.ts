import { IsString } from 'class-validator';

export class UpdateAspirationDto {
  @IsString()
  name: string;
}
