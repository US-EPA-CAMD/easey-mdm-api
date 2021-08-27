import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitsOfMeasureCodeService } from './units-of-measure-code.service';
import { UnitsOfMeasureCodeController } from './units-of-measure-code.controller';
import { UnitsOfMeasureCodeRepository } from './units-of-measure-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UnitsOfMeasureCodeRepository])],
  controllers: [UnitsOfMeasureCodeController],
  providers: [UnitsOfMeasureCodeService],
})
export class UnitsOfMeasureCodeModule {}
