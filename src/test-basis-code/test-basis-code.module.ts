import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestBasisCodeService } from './test-basis-code.service';
import { TestBasisCodeController } from './test-basis-code.controller';
import { TestBasisCodeRepository } from './test-basis-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TestBasisCodeRepository])],
  controllers: [TestBasisCodeController],
  providers: [TestBasisCodeService],
  exports: [TypeOrmModule, TestBasisCodeService],
})
export class TestBasisCodeModule {}
