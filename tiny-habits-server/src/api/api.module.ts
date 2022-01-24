import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module';
import { UserApiModule } from './user/user-api.module';

@Module({
  imports: [TestModule, UserApiModule],
})
export class ApiModule {}
