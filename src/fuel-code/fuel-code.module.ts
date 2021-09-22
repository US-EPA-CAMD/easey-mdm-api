import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuelCodeService } from './fuel-code.service';
import { FuelCodeController } from './fuel-code.controller';
import { FuelCodeRepository } from './fuel-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FuelCodeRepository])],
  controllers: [FuelCodeController],
  providers: [FuelCodeService],
})
export class FuelCodeModule {}
