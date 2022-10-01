import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FuelTypeController } from './fuel-type.controller';
import { FuelTypeService } from './fuel-type.service';
import { FuelTypeRepository } from './fuel-type.repository';
import { FuelTypeMap } from '../maps/fuel-type.map';

@Module({
  imports: [
    TypeOrmModule.forFeature([FuelTypeRepository]),
  ],
  controllers: [
    FuelTypeController
  ],
  providers: [
    FuelTypeMap,
    FuelTypeService,
  ],
  exports: [
    TypeOrmModule,
  ]
})
export class FuelTypeModule {}
