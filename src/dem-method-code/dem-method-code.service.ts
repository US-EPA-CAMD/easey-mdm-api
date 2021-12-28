import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { DemMethodCodeDTO } from '../dto/dem-method-code.dto';
import { DemMethodCodeRepository } from './dem-method-code.repository';

@Injectable()
export class DemMethodCodeService {
  constructor(private readonly repository: DemMethodCodeRepository, private readonly Logger: Logger) {}

  async getDemMethodCodes(): Promise<DemMethodCodeDTO[]> {

    this.Logger.info('Getting dem method codes');
    let query;
    try {
      query = await this.repository.getDemMethodCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got dem method codes');

    return query;
  }
}
