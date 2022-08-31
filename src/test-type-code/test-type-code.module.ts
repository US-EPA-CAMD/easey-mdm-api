import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestTypeCodeService } from './test-type-code.service';
import { TestTypeCodeController } from './test-type-code.controller';
import { TestTypeCodeRepository } from './test-type-code.repository';
import { TestTypeCodeMap } from '../maps/test-type-code.map';

@Module({
  imports: [TypeOrmModule.forFeature([TestTypeCodeRepository])],
  controllers: [TestTypeCodeController],
  providers: [TestTypeCodeService, TestTypeCodeMap],
  exports: [TypeOrmModule, TestTypeCodeService, TestTypeCodeMap],
})
export class TestTypeCodeModule {}
