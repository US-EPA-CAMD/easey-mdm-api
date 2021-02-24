import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ControlTechnologiesController } from './control-technologies.controller';
import { ControlTechnologiesService } from './control-technologies.service';
import { ControlTechnologyMap } from '../maps/control-technology.map';
import { ControlTechnologiesRepository } from './control-technologies.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ControlTechnologiesRepository])],
  controllers: [ControlTechnologiesController],
  providers: [ControlTechnologyMap, ControlTechnologiesService],
})
export class ControlTechnologiesModule {}
