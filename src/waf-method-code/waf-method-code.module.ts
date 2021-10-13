import { Module } from '@nestjs/common';
import { WafMethodCodeController } from './waf-method-code.controller';
import { WafMethodCodeService } from './waf-method-code.service';

@Module({
  controllers: [WafMethodCodeController],
  providers: [WafMethodCodeService]
})
export class WafMethodCodeModule {}
