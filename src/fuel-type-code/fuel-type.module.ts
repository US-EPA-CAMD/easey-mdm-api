import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FuelTypeMap } from 'src/maps/fuel-type.map';
import { FuelTypeController } from './fuel-type.controller';
import { FuelTypesService } from './fuel-type.service';
import { FuelTypeRepository } from './fuel-type-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FuelTypeRepository])],
  controllers: [FuelTypeController],
  providers: [FuelTypeMap, FuelTypesService],
})
export class FuelTypesModule {}
