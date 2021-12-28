import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { EquationCodeDTO } from '../dto/equation-code.dto';
import { EquationCodeRepository } from './equation-code.repository';

@Injectable()
export class EquationCodeService {
  constructor(
    @InjectRepository(EquationCodeRepository)
    private readonly repository: EquationCodeRepository,
    private readonly Logger: Logger
  ) {}

  async getEquationCodes(): Promise<EquationCodeDTO[]> {
    this.Logger.info('Getting equation codes');
    let query;
    try {
      query = await this.repository.getEquationCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got equation codes');
    return query;
  }
}
