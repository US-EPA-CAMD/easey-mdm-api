import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { DemMethodCodeDTO } from '../dto/dem-method-code.dto';
import { DemMethodCodeRepository } from './dem-method-code.repository';

@Injectable()
export class DemMethodCodeService {
  constructor(
    private readonly repository: DemMethodCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getDemMethodCodes(): Promise<DemMethodCodeDTO[]> {
    this.logger.info('Getting dem method codes');
    let query;
    try {
      query = await this.repository.getDemMethodCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got dem method codes');

    return query;
  }
}
