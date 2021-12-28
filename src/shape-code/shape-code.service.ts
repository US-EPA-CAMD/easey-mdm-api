import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';

import { ShapeCodeDTO } from '../dto/shape-code.dto';
import { ShapeCodeRepository } from './shape-code.repository';

@Injectable()
export class ShapeCodeService {
  constructor(
    @InjectRepository(ShapeCodeRepository)
    private readonly repository: ShapeCodeRepository,
    private readonly Logger: Logger,
  ) {}

  async getShapeCodes(): Promise<ShapeCodeDTO[]> {
    this.Logger.info('Getting shape codes');
    let query;
    try {
      query = await this.repository.getShapeCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got shape codes');

    return query;
  }
}
