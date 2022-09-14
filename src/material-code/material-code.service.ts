import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';

import { MaterialCodeDTO } from '../dto/material-code.dto';
import { MaterialCodeRepository } from './material-code.repository';

@Injectable()
export class MaterialCodeService {
  constructor(
    @InjectRepository(MaterialCodeRepository)
    private readonly repository: MaterialCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getMaterialCodes(): Promise<MaterialCodeDTO[]> {
    this.logger.info('Getting all material codes');
    let query;
    try {
      query = await this.repository.getMaterialCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got all fuel types');

    return query;
  }
}
