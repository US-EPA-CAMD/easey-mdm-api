import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { PressureMeasureCodeDTO } from 'src/dto/pressure-measure-code.dto';
import { PressureMeasureCodeRepository } from './pressure-measure-code.repository';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class PressureMeasureCodeService {
  constructor(
    @InjectRepository(PressureMeasureCodeRepository)
    private readonly repository: PressureMeasureCodeRepository,
  ) {}

  async getPressureMeasureCodes(): Promise<PressureMeasureCodeDTO[]> {
    let query;
    try {
      query = await this.repository.getPressureMeasureCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return query;
  }
}
