import { Module } from '@nestjs/common';
import { RataFrequencyCodeService } from './rata-frequency-code.service';
import { RataFrequencyCodeController } from './rata-frequency-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RataFrequencyCodeRepository } from './rata-frequency-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RataFrequencyCodeRepository])],
  controllers: [RataFrequencyCodeController],
  providers: [RataFrequencyCodeService],
})
export class RataFrequencyCodeModule {}
