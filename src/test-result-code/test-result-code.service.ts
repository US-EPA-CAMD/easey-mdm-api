import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { TestResultCodeDTO } from '../dto/test-result-code.dto';
import { TestResultCodeRepository } from './test-result-code.repository';

@Injectable()
export class TestResultCodeService {
  constructor(
    @InjectRepository(TestResultCodeRepository)
    private readonly repository: TestResultCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getTestResultCodes(): Promise<TestResultCodeDTO[]> {
    const result = await this.repository.find();

    return result;
  }
}
