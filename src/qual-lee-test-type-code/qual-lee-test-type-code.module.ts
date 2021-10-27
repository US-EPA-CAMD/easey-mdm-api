import { Module } from '@nestjs/common';
import { QualLeeTestTypeCodeController } from './qual-lee-test-type-code.controller';
import { QualLeeTestTypeCodeService } from './qual-lee-test-type-code.service';

@Module({
  controllers: [QualLeeTestTypeCodeController],
  providers: [QualLeeTestTypeCodeService]
})
export class QualLeeTestTypeCodeModule {}
