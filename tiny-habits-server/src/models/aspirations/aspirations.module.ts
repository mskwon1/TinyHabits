import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aspiration } from './aspiration.entity';
import { AspirationService } from './aspiration.service';

@Module({
  imports: [TypeOrmModule.forFeature([Aspiration])],
  providers: [AspirationService],
  exports: [AspirationService],
})
export class AspirationModule {}
