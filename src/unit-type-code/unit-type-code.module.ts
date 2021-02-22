import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UnitTypeCodeController } from './unit-type-code.controller';
import { UnitTypeCodeService } from './unit-type-code.service';
import { UnitTypeCodeMap } from '../maps/unit-type-code.map';
import { UnitTypeCodeRepository } from './unit-type-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UnitTypeCodeRepository])],
  controllers: [UnitTypeCodeController],
  providers: [UnitTypeCodeMap, UnitTypeCodeService],
})
export class UnitTypeCodeModule {}
