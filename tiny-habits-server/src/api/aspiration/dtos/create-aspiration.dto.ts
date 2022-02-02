import { IsString } from 'class-validator';

export class CreateAspirationDto {
  @IsString()
  name: string;
}
