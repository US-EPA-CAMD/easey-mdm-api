import { Module } from '@nestjs/common';
import { RelationshipsService } from './relationships.service';
import { RelationshipsController } from './relationships.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormulaRelationshipsRepository } from './formula-relationships.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FormulaRelationshipsRepository])],
  controllers: [RelationshipsController],
  providers: [RelationshipsService],
})
export class RelationshipsModule {}
