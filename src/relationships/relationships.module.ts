import { Module } from '@nestjs/common';

import { DataSetService } from '../dataset/dataset.service';
import { DataSetModule } from '../dataset/dataset.module';
import { DataColumnMap } from '../maps/datacolumn.map';
import { DataTableMap } from '../maps/datatable.map';
import { DataSetMap } from '../maps/dataset.map';

import { RelationshipsController } from './relationships.controller';

@Module({
  imports: [
    DataSetModule
  ],
  controllers: [
    RelationshipsController
  ],
  providers: [
    DataSetMap,
    DataTableMap,
    DataColumnMap,
    DataSetService,
  ],
  exports: [],
})
export class RelationshipsModule {}
