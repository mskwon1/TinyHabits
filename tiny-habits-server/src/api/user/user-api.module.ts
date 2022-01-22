import { Module } from '@nestjs/common';
import { UserModule } from '@src/models/users/users.module';
import { UserController } from './user.controller';

@Module({
  imports: [UserModule],
  controllers: [UserController],
})
export class UserApiModule {}
