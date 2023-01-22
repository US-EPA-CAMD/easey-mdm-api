import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DataSetRepository } from './dataset.repository';
import { DataSetService } from './dataset.service';
import { DataColumnMap } from '../maps/datacolumn.map';
import { DataTableMap } from '../maps/datatable.map';
import { DataSetMap } from '../maps/dataset.map';

@Module({
  imports: [
    TypeOrmModule.forFeature([DataSetRepository]),
  ],
  controllers: [],
  providers: [
    DataSetMap,
    DataTableMap,
    DataColumnMap,
    DataSetService,
  ],
  exports: [
    TypeOrmModule,
  ],
})
export class DataSetModule {}
