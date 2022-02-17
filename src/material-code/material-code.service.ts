import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got all fuel types');

    return query;
  }
}
