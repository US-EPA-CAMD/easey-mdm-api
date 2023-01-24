import { Module } from '@nestjs/common';

import { MasterDataController } from './master-data.controller';
import { DataSetService } from '../dataset/dataset.service';
import { DataSetModule } from '../dataset/dataset.module';
import { DataColumnMap } from '../maps/datacolumn.map';
import { DataTableMap } from '../maps/datatable.map';
import { DataSetMap } from '../maps/dataset.map';

@Module({
  imports: [
    DataSetModule,
  ],
  controllers: [
    MasterDataController,
  ],
  providers: [
    DataSetMap,
    DataTableMap,
    DataColumnMap,
    DataSetService,
  ],
  exports: [],
})
export class MasterDataModule {}
