import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperatingLevelCodeService } from './operating-level-code.service';
import { OperatingLevelCodeController } from './operating-level-code.controller';
import { OperatingLevelCodeRepository } from './operating-level-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OperatingLevelCodeRepository])],
  controllers: [OperatingLevelCodeController],
  providers: [OperatingLevelCodeService],
})
export class OperatingLevelCodeModule {}
