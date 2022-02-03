import { Module } from '@nestjs/common';
import { ActionModule } from '@src/models/actions/actions.module';
import { ActionController } from './action.controller';

@Module({
  imports: [ActionModule],
  controllers: [ActionController],
})
export class ActionApiModule {}
