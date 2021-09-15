import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpanScaleCodeService } from './span-scale-code.service';
import { SpanScaleCodeController } from './span-scale-code.controller';
import { SpanScaleCodeRepository } from './span-scale-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SpanScaleCodeRepository])],
  controllers: [SpanScaleCodeController],
  providers: [SpanScaleCodeService],
})
export class SpanScaleCodeModule {}
