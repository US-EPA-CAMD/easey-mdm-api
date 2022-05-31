import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestReasonCodeService } from './test-reason-code.service';
import { TestReasonCodeController } from './test-reason-code.controller';
import { TestReasonCodeRepository } from './test-reason-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TestReasonCodeRepository])],
  controllers: [TestReasonCodeController],
  providers: [TestReasonCodeService],
  exports: [TypeOrmModule, TestReasonCodeService],
})
export class TestReasonCodeModule {}
