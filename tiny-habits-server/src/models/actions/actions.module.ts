import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aspiration } from '../aspirations/aspiration.entity';
import { AspirationService } from '../aspirations/aspiration.service';
import { User } from '../users/user.entity';
import { UserService } from '../users/user.service';
import { Action } from './action.entity';
import { ActionResolver } from './action.resolver';
import { ActionService } from './action.service';

@Module({
  imports: [TypeOrmModule.forFeature([Action, User, Aspiration])],
  providers: [ActionService, UserService, AspirationService, ActionResolver],
  exports: [ActionService],
})
export class ActionModule {}
