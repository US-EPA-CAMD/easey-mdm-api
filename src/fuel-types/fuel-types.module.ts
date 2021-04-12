import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FuelTypeMap } from 'src/maps/fuel-type.map';
import { FuelTypesController } from './fuel-types.controller';
import { FuelTypesService } from './fuel-types.service';
import { FuelTypeRepository } from './fuel-type-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FuelTypeRepository])],
  controllers: [FuelTypesController],
  providers: [FuelTypeMap, FuelTypesService],
})
export class FuelTypesModule {}
