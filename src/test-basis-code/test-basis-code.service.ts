import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { TestBasisCodeDTO } from 'src/dto/test-basis-code.dto';
import { TestBasisCodeRepository } from './test-basis-code.repository';

@Injectable()
export class TestBasisCodeService {
  constructor(
    @InjectRepository(TestBasisCodeRepository)
    private readonly repository: TestBasisCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getTestBasisCodes(): Promise<TestBasisCodeDTO[]> {
    this.logger.info('Getting test basis codes');
    let query;
    try {
      query = await this.repository.getTestBasisCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }

    this.logger.info('Got test basis codes');

    return query;
  }
}
