import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UnitTypeController } from './unit-type.controller';
import { UnitTypeRepository } from './unit-type.repository';
import { UnitTypeService } from './unit-type.service';
import { UnitTypeMap } from '../maps/unit-type.map';

@Module({
  imports: [
    TypeOrmModule.forFeature([UnitTypeRepository]),
  ],
  controllers: [
    UnitTypeController,
  ],
  providers: [
    UnitTypeMap,
    UnitTypeService,
  ],
  exports: [
    TypeOrmModule,
  ],
})
export class UnitTypeModule {}
