import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { Protected } from '@src/decorators/protected.decorator';
import { AuthUser } from '@src/decorators/user.decorator';
import { ActionService } from '@src/models/actions/action.service';
import { CreateActionDto } from './dtos/create-action.dto';
import { UpdateActionDto } from './dtos/update-action.dto';

@Controller('api/actions')
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Protected()
  @Post('/')
  async create(
    @Body() createActionDto: CreateActionDto,
    @AuthUser('id') userId: number,
  ) {
    return await this.actionService.create({
      userId,
      ...createActionDto,
    });
  }

  @Protected()
  @Patch('/:actionId')
  async update(
    @Param('actionId') actionId: number,
    @Body() updateActionDto: UpdateActionDto,
  ) {
    return await this.actionService.update(actionId, updateActionDto);
  }

  @Protected()
  @Delete('/:actionId')
  async delete(@Param('actionId') actionId: number) {
    return await this.actionService.delete(actionId);
  }
}
