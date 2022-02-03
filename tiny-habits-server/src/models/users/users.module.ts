import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Action } from '../actions/action.entity';
import { ActionService } from '../actions/action.service';
import { Aspiration } from '../aspirations/aspiration.entity';
import { AspirationService } from '../aspirations/aspiration.service';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Aspiration, Action])],
  providers: [UserService, AspirationService, ActionService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
