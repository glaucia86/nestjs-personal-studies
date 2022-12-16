/**
 * file: src/main.ts
 * date: 12/15/2022
 * description: file responsible for the main configuration of the application
 * using the Prisma ORM
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
