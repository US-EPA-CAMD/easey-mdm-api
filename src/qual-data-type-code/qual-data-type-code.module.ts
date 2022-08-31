import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QualDataTypeCodeController } from './qual-data-type-code.controller';
import { QualDataTypeCodeService } from './qual-data-type-code.service';
import { QualDataTypeCodeRepository } from './qual-data-type-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QualDataTypeCodeRepository])],
  controllers: [QualDataTypeCodeController],
  providers: [QualDataTypeCodeService],
})
export class QualDataTypeCodeModule {}
