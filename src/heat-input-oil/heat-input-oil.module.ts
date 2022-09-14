import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeatInputOilService } from './heat-input-oil.service';
import { HeatInputOilController } from './heat-input-oil.controller';
import { HeatInputOilRepository } from './heat-input-oil.repository';

@Module({
  imports: [TypeOrmModule.forFeature([HeatInputOilRepository])],
  controllers: [HeatInputOilController],
  providers: [HeatInputOilService],
  exports: [TypeOrmModule, HeatInputOilService],
})
export class HeatInputOilModule {}
