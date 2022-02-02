import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { UserService } from '../users/user.service';
import { Aspiration } from './aspiration.entity';
import { AspirationResolver } from './aspiration.resolver';
import { AspirationService } from './aspiration.service';

@Module({
  imports: [TypeOrmModule.forFeature([Aspiration, User])],
  providers: [AspirationService, AspirationResolver, UserService],
  exports: [AspirationService],
})
export class AspirationModule {}
