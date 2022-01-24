import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '@src/models/users/user.service';
import { LoginDto } from './dto/login.dto';
import * as bcrpyt from 'bcrypt';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const { email, password } = loginDto;

    const { password: hashPassword } = await this.userService.findOneByEmail(
      email,
      true,
    );

    const result = await bcrpyt.compare(password, hashPassword);
    console.log(result);

    return true;
  }
}
