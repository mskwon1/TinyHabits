import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Action } from '../actions/action.entity';
import { ActionService } from '../actions/action.service';
import { User } from '../users/user.entity';
import { UserService } from '../users/user.service';
import { Aspiration } from './aspiration.entity';
import { AspirationResolver } from './aspiration.resolver';
import { AspirationService } from './aspiration.service';

@Module({
  imports: [TypeOrmModule.forFeature([Aspiration, User, Action])],
  providers: [
    AspirationService,
    UserService,
    ActionService,
    AspirationResolver,
  ],
  exports: [AspirationService],
})
export class AspirationModule {}
