import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Aspiration } from './aspiration.entity';
import { AspirationService } from './aspiration.service';

@Module({
  imports: [TypeOrmModule.forFeature([Aspiration, User])],
  providers: [AspirationService],
  exports: [AspirationService],
})
export class AspirationModule {}
