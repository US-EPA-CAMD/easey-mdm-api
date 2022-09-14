import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
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
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got shape codes');

    return query;
  }
}
