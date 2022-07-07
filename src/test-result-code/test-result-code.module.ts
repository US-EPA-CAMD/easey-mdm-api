import { Module } from '@nestjs/common';
import { TestResultCodeService } from './test-result-code.service';
import { TestResultCodeController } from './test-result-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestResultCodeRepository } from './test-result-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TestResultCodeRepository])],
  controllers: [TestResultCodeController],
  providers: [TestResultCodeService],
})
export class TestResultCodeModule {}
