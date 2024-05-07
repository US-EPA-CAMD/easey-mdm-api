import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FuelTypeMap } from '../maps/fuel-type.map';
import { FuelTypeController } from './fuel-type.controller';
import { FuelTypeRepository } from './fuel-type.repository';
import { FuelTypeService } from './fuel-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([FuelTypeRepository])],
  controllers: [FuelTypeController],
  providers: [FuelTypeMap, FuelTypeRepository, FuelTypeService],
  exports: [TypeOrmModule],
})
export class FuelTypeModule {}
