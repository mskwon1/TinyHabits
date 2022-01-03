import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const expressApp = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  const configService = expressApp.get(ConfigService);
  const port = +configService.get('PORT') || 3005;

  await expressApp.listen(port);
}
bootstrap();
