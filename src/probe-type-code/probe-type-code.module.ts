import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProbeTypeCodeController } from './probe-type-code.controller';
import { ProbeTypeCodeService } from './probe-type-code.service';
import { ProbeTypeCodeRepository } from './probe-type-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProbeTypeCodeRepository])],
  controllers: [ProbeTypeCodeController],
  providers: [ProbeTypeCodeService],
})
export class ProbeTypeCodeModule {}