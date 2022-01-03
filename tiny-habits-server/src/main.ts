import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

const DEFAULT_PORT_NUMBER = 3005;

async function bootstrap() {
  const expressApp = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  const configService = expressApp.get(ConfigService);
  const port = +configService.get('PORT') || DEFAULT_PORT_NUMBER;

  await expressApp.listen(port);
}
bootstrap();
