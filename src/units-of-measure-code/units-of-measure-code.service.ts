import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitsOfMeasureCodeRepository } from './units-of-measure-code.repository';
import { UnitsOfMeasureCodeDTO } from '../dto/units-of-measure-code.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';

@Injectable()
export class UnitsOfMeasureCodeService {
  constructor(
    @InjectRepository(UnitsOfMeasureCodeRepository)
    private readonly repository: UnitsOfMeasureCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getUnitsOfMeasureCodes(): Promise<UnitsOfMeasureCodeDTO[]> {
    this.logger.info('Getting units of measure code');
    let query;
    try {
      query = await this.repository.getUnitsOfMeasureCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got units of measure code');

    return query;
  }
}
