import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RelationshipsService } from './relationships.service';
import { RelationshipsController } from './relationships.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormulaRelationshipsRepository } from './formula-relationships.repository';
import { SpansRelationshipsRepository } from './spans-relationships.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FormulaRelationshipsRepository,
      SpansRelationshipsRepository,
    ]),
    HttpModule,
  ],
  controllers: [RelationshipsController],
  providers: [RelationshipsService],
})
export class RelationshipsModule {}
