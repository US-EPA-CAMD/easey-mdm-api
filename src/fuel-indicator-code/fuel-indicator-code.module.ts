import { Module } from '@nestjs/common';
import { FuelIndicatorCodeService } from './fuel-indicator-code.service';
import { FuelIndicatorCodeController } from './fuel-indicator-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuelIndicatorCodeRepository } from './fuel-indicator-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FuelIndicatorCodeRepository])],
  controllers: [FuelIndicatorCodeController],
  providers: [FuelIndicatorCodeService],
})
export class FuelIndicatorCodeModule {}
