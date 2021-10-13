import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WafMethodCodeController } from './waf-method-code.controller';
import { WafMethodCodeService } from './waf-method-code.service';
import { WafMethodCodeRepository } from './waf-method-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([WafMethodCodeRepository])],
  controllers: [WafMethodCodeController],
  providers: [WafMethodCodeService],
})
export class WafMethodCodeModule {}
