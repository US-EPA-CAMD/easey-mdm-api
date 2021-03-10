import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramsRepository } from './programs.repository';
import { ProgramsController } from './programs.controller';
import { ProgramMap } from '../maps/program.map';
import { ProgramsService } from './programs.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProgramsRepository])],
  controllers: [ProgramsController],
  providers: [ProgramMap, ProgramsService],
})
export class ProgramsModule {}
