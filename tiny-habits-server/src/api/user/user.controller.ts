import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { User } from '@src/models/users/user.entity';
import { UserService } from '@src/models/users/user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userService.create(createUserDto);
    return createdUser;
  }

  @Put('/:userId')
  async update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId') userId: number,
  ): Promise<User> {
    const updatedUser = await this.userService.update(userId, updateUserDto);
    return updatedUser;
  }

  @Delete('/:userId')
  async delete(@Param('userId') userId: number): Promise<void> {
    await this.userService.delete(userId);
  }
}
