import { Module } from '@nestjs/common';
import { MaximumFuelFlowRateCodeService } from './maximum-fuel-flow-rate-code.service';
import { MaximumFuelFlowRateCodeController } from './maximum-fuel-flow-rate-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaximumFuelFlowRateCodeRepository } from './maximum-fuel-flow-rate-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MaximumFuelFlowRateCodeRepository])],
  controllers: [MaximumFuelFlowRateCodeController],
  providers: [MaximumFuelFlowRateCodeService],
})
export class MaximumFuelFlowRateCodeModule {}
