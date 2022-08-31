import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { TestReasonCodeDTO } from 'src/dto/test-reason-code.dto';
import { TestReasonCodeRepository } from './test-reason-code.repository';

@Injectable()
export class TestReasonCodeService {
  constructor(
    @InjectRepository(TestReasonCodeRepository)
    private readonly repository: TestReasonCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getTestReasonCodes(): Promise<TestReasonCodeDTO[]> {
    this.logger.info('Getting test reason codes');
    let query;
    try {
      query = await this.repository.getTestReasonCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }

    this.logger.info('Got test reason codes');

    return query;
  }
}
