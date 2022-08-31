import { Module } from '@nestjs/common';
import { OperatingConditionCodeService } from './operating-condition-code.service';
import { OperatingConditionCodeController } from './operating-condition-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperatingConditionCodeRepository } from './operating-condition-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OperatingConditionCodeRepository])],
  controllers: [OperatingConditionCodeController],
  providers: [OperatingConditionCodeService],
})
export class OperatingConditionCodeModule {}
