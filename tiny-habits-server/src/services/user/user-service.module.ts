import { Module } from '@nestjs/common';
import { UserModule } from '@src/models/actions/actions.module';
import { UserService } from './user.service';

@Module({
  imports: [UserModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserServiceModule {}
