import { Module } from '@nestjs/common';
import { AspirationModule } from '@src/models/aspirations/aspirations.module';
import { AspirationController } from './aspiration.controller';

@Module({
  imports: [AspirationModule],
  controllers: [AspirationController],
})
export class AspirationApiModule {}
