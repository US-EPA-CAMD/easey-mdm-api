import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemFuelFlowUOMCodeService } from './system-fuel-flow-uom-code.service';
import { SystemFuelFlowUOMCodeController } from './system-fuel-flow-uom-code.controller';
import { SystemFuelFlowUOMCodeRepository } from './system-fuel-flow-uom-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SystemFuelFlowUOMCodeRepository])],
  controllers: [SystemFuelFlowUOMCodeController],
  providers: [SystemFuelFlowUOMCodeService],
})
export class SystemFuelFlowUomCodeModule {}
