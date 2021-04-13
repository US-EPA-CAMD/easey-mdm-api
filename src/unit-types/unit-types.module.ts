import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UnitTypesController } from './unit-types.controller';
import { UnitTypesService } from './unit-types.service';
import { UnitTypeMap } from '../maps/unit-type.map';
import { UnitTypeRepository } from './unit-type-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UnitTypeRepository])],
  controllers: [UnitTypesController],
  providers: [UnitTypeMap, UnitTypesService],
})
export class UnitTypesModule {}
