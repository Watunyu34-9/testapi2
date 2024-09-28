import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';

@Module({
  providers: [...databaseProviders, DatabaseService],
  exports: [...databaseProviders],
  controllers: [DatabaseController],
})
export class DatabaseModule {}