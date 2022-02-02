import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aspiration } from '../aspirations/aspiration.entity';
import { AspirationService } from '../aspirations/aspiration.service';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Aspiration])],
  providers: [UserService, UserResolver, AspirationService],
  exports: [UserService],
})
export class UserModule {}
