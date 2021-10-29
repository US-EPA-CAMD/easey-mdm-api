import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QualTypeCodeController } from './qual-type-code.controller';
import { QualTypeCodeService } from './qual-type-code.service';
import { QualTypeCodeRepository } from './qual-type-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QualTypeCodeRepository])],
  controllers: [QualTypeCodeController],
  providers: [QualTypeCodeService],
})
export class QualTypeCodeModule {}
