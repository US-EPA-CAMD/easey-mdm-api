import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProgramMap } from '../maps/program.map';
import { ProgramController } from './program.controller';
import { ProgramRepository } from './program.repository';
import { ProgramService } from './program.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProgramRepository])],
  controllers: [ProgramController],
  providers: [ProgramMap, ProgramRepository, ProgramService],
  exports: [TypeOrmModule],
})
export class ProgramModule {}
