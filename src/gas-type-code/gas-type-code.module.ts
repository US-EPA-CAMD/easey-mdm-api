import { Module } from '@nestjs/common';
import { GasTypeCodeService } from './gas-type-code.service';
import { GasTypeCodeController } from './gas-type-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GasTypeCodeRepository } from './gas-type-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([GasTypeCodeRepository])],
  controllers: [GasTypeCodeController],
  providers: [GasTypeCodeService],
})
export class GasTypeCodeModule {}
