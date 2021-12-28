import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { SystemTypeCodeDTO } from '../dto/system-type-code.dto';
import { SystemTypeCodeRepository } from './system-type-code.repository';

@Injectable()
export class SystemTypeCodeService {
  constructor(
    @InjectRepository(SystemTypeCodeRepository)
    private readonly repository: SystemTypeCodeRepository,
    private readonly Logger: Logger,
  ) {}

  async getSystemTypeCodes(): Promise<SystemTypeCodeDTO[]> {
    this.Logger.info('Getting system type codes');
    let query;
    try {
      query = await this.repository.getSystemTypeCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got system type codes');

    return query;
  }
}
