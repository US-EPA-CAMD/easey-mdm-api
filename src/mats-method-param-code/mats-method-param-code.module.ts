import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MatsMethodParamCodeService } from './mats-method-param-code.service';
import { MatsMethodParamCodeController } from './mats-method-param-code.controller';
import { MatsMethodParamCodeRepository } from './mats-method-param-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MatsMethodParamCodeRepository])],
  controllers: [MatsMethodParamCodeController],
  providers: [MatsMethodParamCodeService],
})
export class MatsMethodParamCodeModule {}
