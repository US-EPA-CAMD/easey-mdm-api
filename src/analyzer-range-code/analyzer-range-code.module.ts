import { Module } from '@nestjs/common';
import { AnalyzerRangeCodeService } from './analyzer-range-code.service';
import { AnalyzerRangeCodeController } from './analyzer-range-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyzerRangeCodeRepository } from './analyzer-range-code.repository';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnalyzerRangeCodeRepository]),
    HttpModule,
  ],
  controllers: [AnalyzerRangeCodeController],
  providers: [AnalyzerRangeCodeService, ConfigService],
})
export class AnalyzerRangeCodeModule {}
