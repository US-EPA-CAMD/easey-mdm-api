import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatesRepository } from './states.repository';
import { StatesController } from './states.controller';
import { StateMap } from '../maps/state.map';
import { StatesService } from './states.service';

@Module({
  imports: [TypeOrmModule.forFeature([StatesRepository])],
  controllers: [StatesController],
  providers: [StateMap, StatesService],
})
export class StatesModule {}
