import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpansRelationshipsController } from './spans-relationships.controller';
import { SpansRelationshipsRepository } from './spans-relationships.repository';
import { SpansRelationshipsService } from './spans-relationships.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([SpansRelationshipsRepository]),
    HttpModule,
  ],
  controllers: [SpansRelationshipsController],
  providers: [SpansRelationshipsService],
})
export class SpansRelationshipsModule {}
