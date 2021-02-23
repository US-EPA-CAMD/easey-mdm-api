import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UnitTypesController } from './unit-types.controller';
import { UnitTypesService } from './unit-types.service';
import { UnitTypeMap } from '../maps/unit-type.map';
import { UnitTypesRepository } from './unit-types.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UnitTypesRepository])],
  controllers: [UnitTypesController],
  providers: [UnitTypeMap, UnitTypesService],
})
export class UnitTypesModule {}
