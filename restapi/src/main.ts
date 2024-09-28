import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mysql from 'mysql2';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
