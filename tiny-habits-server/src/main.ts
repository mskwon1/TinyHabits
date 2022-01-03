import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const expressApp = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  await expressApp.listen(3000);
}
bootstrap();
