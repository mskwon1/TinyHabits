import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Action } from './action.entity';
import { ActionService } from './action.service';

@Module({
  imports: [TypeOrmModule.forFeature([Action, User])],
  providers: [ActionService],
  exports: [ActionService],
})
export class ActionModule {}
