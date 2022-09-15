import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestClaimCodeController } from './test-claim-code.controller';
import { TestClaimCodeService } from './test-claim-code.service';
import { TestClaimCodeRepository } from './test-claim-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TestClaimCodeRepository])],
  controllers: [TestClaimCodeController],
  providers: [TestClaimCodeService],
})
export class TestClaimCodeModule {}