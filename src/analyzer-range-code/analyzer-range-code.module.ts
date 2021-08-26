import { Module } from '@nestjs/common';
import { AnalyzerRangeCodeService } from './analyzer-range-code.service';
import { AnalyzerRangeCodeController } from './analyzer-range-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyzerRangeCodeRepository } from './analyzer-range-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AnalyzerRangeCodeRepository])],
  controllers: [AnalyzerRangeCodeController],
  providers: [AnalyzerRangeCodeService],
})
export class AnalyzerRangeCodeModule {}
