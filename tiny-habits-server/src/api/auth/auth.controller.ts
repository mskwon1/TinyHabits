import { Controller, Post, Request, UseGuards } from '@nestjs/common';
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
    @Request() req,
  ): Promise<{ userId: number; email: string; accessToken: string }> {
    const { accessToken } = await this.authService.signJwtToken(req.user);
    const { id, email } = req.user;

    return {
      userId: id,
      email,
      accessToken,
    };
  }
}
