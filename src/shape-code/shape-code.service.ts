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
    private readonly logger: Logger,
  ) {}

  async getShapeCodes(): Promise<ShapeCodeDTO[]> {
    this.logger.info('Getting shape codes');
    let query;
    try {
      query = await this.repository.getShapeCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got shape codes');

    return query;
  }
}
