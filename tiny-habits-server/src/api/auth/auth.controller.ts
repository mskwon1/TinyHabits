import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Protected } from '@src/decorators/protected.decorator';
import { AuthUser } from '@src/decorators/user.decorator';
import { User } from '@src/models/users/user.entity';
import { UserService } from '@src/models/users/user.service';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LocalAuthGuard } from './local-auth.guard';
import _ from 'lodash';

@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@AuthUser() user: User): Promise<User & { accessToken: string }> {
    const { accessToken } = await this.authService.signJwtToken(user);

    return {
      ...user,
      accessToken,
    };
  }

  @Post('/signup')
  async signup(@Body() signupDto: SignupDto): Promise<User> {
    const signedUpUser = await this.userService.create(signupDto);

    return _.omit(signedUpUser, ['password']);
  }

  @Protected()
  @Get('/protected')
  async protected(@AuthUser() user: User) {
    return user;
  }

  @Get('/public')
  async public() {
    return 'this is public';
  }
}
