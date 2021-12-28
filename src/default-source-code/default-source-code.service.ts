import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { DefaultSourceCodeDTO } from '../dto/default-source-code.dto';
import { DefaultSourceCodeRepository } from './default-source-code.repository';

@Injectable()
export class DefaultSourceCodeService {
  constructor(
    @InjectRepository(DefaultSourceCodeRepository)
    private readonly repository: DefaultSourceCodeRepository,
    private readonly Logger: Logger,
  ) {}

  async getDefaultSourceCodes(): Promise<DefaultSourceCodeDTO[]> {
    this.Logger.info('Getting default source codes');
    let query;
    try {
      query = await this.repository.getDefaultSourceCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got default source codes');

    return query;
  }
}
