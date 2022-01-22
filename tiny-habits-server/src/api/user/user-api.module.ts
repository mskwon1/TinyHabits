import { Module } from '@nestjs/common';
import { UserServiceModule } from '@src/services/user/user-service.module';
import { UserService } from '@src/services/user/user.service';

@Module({
  imports: [UserServiceModule],
  controllers: [],
  providers: [UserService],
})
export class UserApiModule {}
