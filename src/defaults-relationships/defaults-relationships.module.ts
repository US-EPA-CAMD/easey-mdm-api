import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultsRelationshipsController } from './defaults-relationships.controller';
import { DefaultsRelationshipsRepository } from './defaults-relationships.repository';
import { DefaultsRelationshipsService } from './defaults-relationships.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DefaultsRelationshipsRepository]),
    HttpModule,
  ],
  controllers: [DefaultsRelationshipsController],
  providers: [DefaultsRelationshipsService],
})
export class DefaultsRelationshipsModule {}
