import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QualLeeTestTypeCodeController } from './qual-lee-test-type-code.controller';
import { QualLeeTestTypeCodeService } from './qual-lee-test-type-code.service';
import { QualLeeTestTypeCodeRepository } from './qual-lee-test-type-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QualLeeTestTypeCodeRepository])],
  controllers: [QualLeeTestTypeCodeController],
  providers: [QualLeeTestTypeCodeService],
})
export class QualLeeTestTypeCodeModule {}
