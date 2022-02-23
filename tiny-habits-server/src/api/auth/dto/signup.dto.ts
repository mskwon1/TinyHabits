import { IsEmail, IsString, Length, Matches } from 'class-validator';

export class SignupDto {
  @Length(1, 20)
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @Length(8, 20)
  @IsString()
  @Matches(/^[\w!@#$_-]*$/)
  password: string;
}
