import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemDesignationCodeRepository } from './system-designation-code.repository';
import { SystemDesignationCodeDTO } from '../dto/system-designation-code.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';

@Injectable()
export class SystemDesignationCodeService {
  constructor(
    @InjectRepository(SystemDesignationCodeRepository)
    private readonly repository: SystemDesignationCodeRepository,
    private logger: Logger,
  ) {}

  async getSystemDesignationCodes(): Promise<SystemDesignationCodeDTO[]> {
    this.logger.info('Getting system designation codes');
    let query;
    try {
      query = await this.repository.getSystemDesignationCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got system designation codes');

    return query;
  }
}
