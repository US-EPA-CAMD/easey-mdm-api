import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { AcquisitionMethodCodeRepository } from './acquisition-method-code.repository';
import { AcquisitionMethodCodeDTO } from '../dto/acquisition-method-code.dto';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';

@Injectable()
export class AcquisitionMethodCodeService {
  constructor(
    @InjectRepository(AcquisitionMethodCodeRepository)
    private readonly repository: AcquisitionMethodCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getAcquisitionMethodCodes(): Promise<AcquisitionMethodCodeDTO[]> {
    this.logger.info('Getting acquisition method codes');
    let query;
    try {
      query = await this.repository.getAcquisitionMethodCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got acquisition method codes');
    return query;
  }
}
