import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { PressureMeasureCodeDTO } from 'src/dto/pressure-measure-code.dto';
import { PressureMeasureCodeRepository } from './pressure-measure-code.repository';

@Injectable()
export class PressureMeasureCodeService {
  constructor(
    @InjectRepository(PressureMeasureCodeRepository)
    private readonly repository: PressureMeasureCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getPressureMeasureCodes(): Promise<PressureMeasureCodeDTO[]> {
    this.logger.info('Getting pressure measure codes');
    let query;
    try {
      query = await this.repository.getPressureMeasureCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }

    this.logger.info('Got pressure measure codes');

    return query;
  }
}
