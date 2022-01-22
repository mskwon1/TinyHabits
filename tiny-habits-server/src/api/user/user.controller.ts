import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('api/users')
export class UserController {
  @Post('/')
  async create() {
    // TODO
  }

  @Get('/')
  async findAll() {
    // TODO
  }

  @Get('/:userId')
  async findOne() {
    // TODO
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
