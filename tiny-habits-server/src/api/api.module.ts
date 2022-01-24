import { Module } from '@nestjs/common';
import { AuthApiModule } from './auth/auth-api.module';
import { TestModule } from './test/test.module';
import { UserApiModule } from './user/user-api.module';

@Module({
  imports: [TestModule, UserApiModule, AuthApiModule],
})
export class ApiModule {}
