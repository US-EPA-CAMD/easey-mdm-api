import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CodeTableController } from './code-table.controller';
import { CodeTableRepository } from './code-table.repository';
import { CodeTableService } from './code-table.service';
import { DataColumnMap } from '../maps/datacolumn.map';
import { DataTableMap } from '../maps/datatable.map';
import { DataSetMap } from '../maps/dataset.map';

@Module({
  imports: [
    TypeOrmModule.forFeature([CodeTableRepository]),
  ],
  controllers: [
    CodeTableController,
  ],
  providers: [
    DataSetMap,
    DataTableMap,
    DataColumnMap,
    CodeTableService,
  ],
  exports: [
    TypeOrmModule,
  ],
})
export class CodeTableModule {}
