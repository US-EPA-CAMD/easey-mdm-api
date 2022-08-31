import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { DefaultPurposeCodeDTO } from 'src/dto/default-purpose-code.dto';
import { DefaultPurposeCodeRepository } from './default-purpose-code.repository';

@Injectable()
export class DefaultPurposeCodeService {
  constructor(
    @InjectRepository(DefaultPurposeCodeRepository)
    private readonly repository: DefaultPurposeCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getDefaultPurposeCodes(): Promise<DefaultPurposeCodeDTO[]> {
    this.logger.info('Getting default purpose codes');
    let query;
    try {
      query = await this.repository.getDefaultPurposeCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got default purpose codes');

    return query;
  }
}
