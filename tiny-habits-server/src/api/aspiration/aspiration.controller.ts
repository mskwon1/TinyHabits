import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Protected } from '@src/decorators/protected.decorator';
import { AuthUser } from '@src/decorators/user.decorator';
import { AspirationService } from '@src/models/aspirations/aspiration.service';
import { CreateAspirationDto } from './dtos/create-aspiration.dto';
import { UpdateAspirationDto } from './dtos/update-aspiration.dto';

@Controller('api/aspirations')
export class AspirationController {
  constructor(private readonly aspirationService: AspirationService) {}

  @Protected()
  @Post('/')
  async create(
    @Body() createAspirationDto: CreateAspirationDto,
    @AuthUser('id') userId: number,
  ) {
    return await this.aspirationService.create({
      userId,
      ...createAspirationDto,
    });
  }

  @Protected()
  @Patch('/:aspirationId')
  async update(
    @Param('aspirationId') aspirationId: number,
    @Body() updateAspirationDto: UpdateAspirationDto,
  ) {
    return await this.aspirationService.update(aspirationId, {
      ...updateAspirationDto,
    });
  }

  @Protected()
  @Delete('/:aspirationId')
  async delete(@Param('aspirationId') aspirationId: number) {
    return await this.aspirationService.delete(aspirationId);
  }
}
