import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MatsMethodCodeService } from './mats-method-code.service';
import { MatsMethodCodeController } from './mats-method-code.controller';
import { MatsMethodCodeRepository } from './mats-method-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MatsMethodCodeRepository])],
  controllers: [MatsMethodCodeController],
  providers: [MatsMethodCodeService],
})
export class MatsMethodCodeModule {}
