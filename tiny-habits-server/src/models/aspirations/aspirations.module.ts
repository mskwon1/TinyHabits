import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aspiration } from './aspiration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aspiration])],
})
export class AspirationModule {}
