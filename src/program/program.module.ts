import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProgramController } from './program.controller';
import { ProgramRepository } from './program.repository';
import { ProgramService } from './program.service';
import { ProgramMap } from '../maps/program.map';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProgramRepository]),
  ],
  controllers: [
    ProgramController,
  ],
  providers: [
    ProgramMap,
    ProgramService,
  ],
  exports: [
    TypeOrmModule,
  ],
})
export class ProgramModule {}
