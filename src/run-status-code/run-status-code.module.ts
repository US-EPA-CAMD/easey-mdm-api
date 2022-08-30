import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RunStatusCodeRepository } from './run-status-code.repository';
import { RunStatusCodeController } from './run-status-code.controller';
import { RunStatusCodeService } from './run-status-code.service';

@Module({
  imports: [TypeOrmModule.forFeature([RunStatusCodeRepository])],
  controllers: [RunStatusCodeController],
  providers: [RunStatusCodeService],
})
export class RunStatusCodeModule {}
