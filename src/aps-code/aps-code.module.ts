import { Module } from '@nestjs/common';
import { ApsCodeService } from './aps-code.service';
import { ApsCodeController } from './aps-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApsCodeRepository } from './aps-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ApsCodeRepository])],
  controllers: [ApsCodeController],
  providers: [ApsCodeService],
})
export class ApsCodeModule {}
