import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FuelTypeMap } from 'src/maps/fuel-type.map';
import { FuelTypesController } from './fuel-types.controller';
import { FuelTypesService } from './fuel-types.service';
import { FuelTypesRepository } from './fuel-types.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FuelTypesRepository])],
  controllers: [FuelTypesController],
  providers: [FuelTypeMap, FuelTypesService],
})
export class FuelTypesModule {}
