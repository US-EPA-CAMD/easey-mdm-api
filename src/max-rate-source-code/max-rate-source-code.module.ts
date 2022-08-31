import { Module } from '@nestjs/common';
import { MaxRateSourceCodeService } from './max-rate-source-code.service';
import { MaxRateSourceCodeController } from './max-rate-source-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaxRateSourceCodeRepository } from './max-rate-source-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MaxRateSourceCodeRepository])],
  controllers: [MaxRateSourceCodeController],
  providers: [MaxRateSourceCodeService],
})
export class MaxRateSourceCodeModule {}
