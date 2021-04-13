import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProgramRepository } from './program-code.repository';
import { ProgramsController } from './programs.controller';
import { ProgramMap } from '../maps/program.map';
import { ProgramsService } from './programs.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProgramRepository])],
  controllers: [ProgramsController],
  providers: [ProgramMap, ProgramsService],
})
export class ProgramsModule {}
