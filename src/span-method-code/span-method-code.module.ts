import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpanMethodCodeService } from './span-method-code.service';
import { SpanMethodCodeController } from './span-method-code.controller';
import { SpanMethodCodeRepository } from './span-method-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SpanMethodCodeRepository])],
  controllers: [SpanMethodCodeController],
  providers: [SpanMethodCodeService],
})
export class SpanMethodCodeModule {}
