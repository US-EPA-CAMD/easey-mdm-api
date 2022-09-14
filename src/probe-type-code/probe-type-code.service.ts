import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProbeTypeCodeRepository } from './probe-type-code.repository';
import { QualTypeCodeDTO } from '../dto/qual-type-code.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';

@Injectable()
export class ProbeTypeCodeService {
  constructor(
    @InjectRepository(ProbeTypeCodeRepository)
    private readonly repository: ProbeTypeCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getProbeTypeCodes(): Promise<QualTypeCodeDTO[]> {
    this.logger.info('Getting probe type codes');
    let query;
    try {
      query = await this.repository.getProbeTypeCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Getting probe type codes');

    return query;
  }
}