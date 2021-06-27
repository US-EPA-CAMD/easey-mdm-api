import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BypassApproachCodesController } from './bypass-approach-code.controller';
import { BypassApproachCodeRepository } from './bypass-approach-code.repository';
import { BypassApproachCodeService } from './bypass-approach-code.service';

@Module({
  imports: [TypeOrmModule.forFeature([BypassApproachCodeRepository])],
  controllers: [BypassApproachCodesController],
  providers: [BypassApproachCodeService],
})
export class BypassApproachCodeModule {}
