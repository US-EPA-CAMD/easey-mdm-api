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
    private readonly Logger: Logger
  ) {}

  async getUnitsOfMeasureCodes(): Promise<UnitsOfMeasureCodeDTO[]> {

    this.Logger.info('Getting units of measure code');
    let query;
    try {
      query = await this.repository.getUnitsOfMeasureCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got units of measure code');

    return query;
  }
}
