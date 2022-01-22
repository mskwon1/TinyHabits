import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { User } from '@src/models/users/user.entity';
import { UserService } from '@src/models/users/user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userService.create(createUserDto);
    return createdUser;
  }

  @Put('/:userId')
  async update() {
    // TODO
  }

  @Delete('/:userId')
  async delete() {
    // TODO
  }
}
