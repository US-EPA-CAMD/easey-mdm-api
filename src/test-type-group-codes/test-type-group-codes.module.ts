import { Module } from '@nestjs/common';
import { TestTypeGroupCodesService } from './test-type-group-codes.service';
import { TestTypeGroupCodesController } from './test-type-group-codes.controller';
import { TestTypeGroupCodeRepository } from './test-type-group-code.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestTypeGroupCodeMap } from '../maps/test-type-group-code.map';

@Module({
  imports: [TypeOrmModule.forFeature([TestTypeGroupCodeRepository])],
  controllers: [TestTypeGroupCodesController],
  providers: [TestTypeGroupCodesService, TestTypeGroupCodeMap],
  exports: [TypeOrmModule, TestTypeGroupCodesService, TestTypeGroupCodeMap],
})
export class TestTypeGroupCodesModule {}
