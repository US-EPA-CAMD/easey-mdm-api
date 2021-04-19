import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ControlTechnologiesController } from './control-technologies.controller';
import { ControlTechnologiesService } from './control-technologies.service';
import { ControlTechnologyMap } from '../maps/control-technology.map';
import { ControlTechnologyRepository } from './control-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ControlTechnologyRepository])],
  controllers: [ControlTechnologiesController],
  providers: [ControlTechnologyMap, ControlTechnologiesService],
})
export class ControlTechnologiesModule {}
