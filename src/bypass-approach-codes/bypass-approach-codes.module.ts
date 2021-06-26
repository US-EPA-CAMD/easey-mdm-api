import { Module } from '@nestjs/common';
import { BypassApproachCodesController } from './bypass-approach-codes.controller';
import { BypassApproachCodesService } from './bypass-approach-codes.service';

@Module({
  controllers: [BypassApproachCodesController],
  providers: [BypassApproachCodesService]
})
export class BypassApproachCodesModule {}
