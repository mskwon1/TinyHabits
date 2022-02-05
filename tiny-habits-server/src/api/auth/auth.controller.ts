import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Protected } from '@src/decorators/protected.decorator';
import { AuthUser } from '@src/decorators/user.decorator';
import { User } from '@src/models/users/user.entity';
import { UserService } from '@src/models/users/user.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(
    @AuthUser() user: User,
  ): Promise<{ userId: number; email: string; accessToken: string }> {
    const { accessToken } = await this.authService.signJwtToken(user);
    const { id, email } = user;

    return {
      userId: id,
      email,
      accessToken,
    };
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
