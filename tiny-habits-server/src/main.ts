import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

const DEFAULT_PORT_NUMBER = 3005;

async function bootstrap() {
  const expressApp = await NestFactory.create<NestExpressApplication>(
    AppModule,
    { cors: true },
  );

  const configService = expressApp.get(ConfigService);
  const port = +configService.get('PORT') || DEFAULT_PORT_NUMBER;

  expressApp.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  await expressApp.listen(port);
}
bootstrap();
