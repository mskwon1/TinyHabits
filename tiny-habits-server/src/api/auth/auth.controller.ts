import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Controller('api/auth')
export class AuthController {
  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    // TODO : 구현
    return true;
  }
}
