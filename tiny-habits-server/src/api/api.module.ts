import { Module } from '@nestjs/common';
import { AspirationApiModule } from './aspiration/aspiration-api.module';
import { AuthApiModule } from './auth/auth-api.module';
import { TestModule } from './test/test.module';
import { UserApiModule } from './user/user-api.module';

@Module({
  imports: [TestModule, UserApiModule, AuthApiModule, AspirationApiModule],
})
export class ApiModule {}
