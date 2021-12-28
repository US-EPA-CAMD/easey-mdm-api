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
    private readonly Logger: Logger
  ) {}

  async getMaterialCodes(): Promise<MaterialCodeDTO[]> {

    this.Logger.info('Getting all material codes');
    let query;
    try {
      query = await this.repository.getMaterialCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got all fuel types');

    return query;
  }
}
