import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestClaimCodeRepository } from './test-claim-code.repository';
import { TestClaimCodeDTO } from '../dto/test-claim-code.dto';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class TestClaimCodeService {
  constructor(
    @InjectRepository(TestClaimCodeRepository)
    private readonly repository: TestClaimCodeRepository,
  ) {}

  async getTestClaimCodes(): Promise<TestClaimCodeDTO[]> {
    let query;
    try {
      query = await this.repository.getTestClaimCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return query;
  }
}