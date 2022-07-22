import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GasLevelCodeService } from './gas-level-code.service';
import { GasLevelCodeController } from './gas-level-code.controller';
import { GasLevelCodeRepository } from './gas-level-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([GasLevelCodeRepository])],
  controllers: [GasLevelCodeController],
  providers: [GasLevelCodeService],
})
export class GasLevelCodeModule {}
