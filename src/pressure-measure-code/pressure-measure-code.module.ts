import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PressureMeasureCodeService } from './pressure-measure-code.service';
import { PressureMeasureCodeController } from './pressure-measure-code.controller';
import { PressureMeasureCodeRepository } from './pressure-measure-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PressureMeasureCodeRepository])],
  controllers: [PressureMeasureCodeController],
  providers: [PressureMeasureCodeService],
  exports: [TypeOrmModule, PressureMeasureCodeService],
})
export class PressureMeasureCodeModule {}
