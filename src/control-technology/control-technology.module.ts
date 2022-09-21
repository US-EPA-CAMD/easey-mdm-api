import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ControlTechnologyController } from './control-technology.controller';
import { ControlTechnologyService } from './control-technology.service';
import { ControlTechnologyRepository } from './control-technology.repository';
import { ControlTechnologyMap } from '../maps/control-technology.map';

@Module({
  imports: [
    TypeOrmModule.forFeature([ControlTechnologyRepository]),
  ],
  controllers: [
    ControlTechnologyController
  ],
  providers: [
    ControlTechnologyMap,
    ControlTechnologyService,
  ],
  exports: [
    TypeOrmModule,
  ]
})
export class ControlTechnologyModule {}
