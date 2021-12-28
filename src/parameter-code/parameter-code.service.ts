import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { ParameterCodeDTO } from '../dto/parameter-code.dto';
import { ParameterCodeRepository } from './parameter-code.repository';

@Injectable()
export class ParameterCodeService {
  constructor(
    @InjectRepository(ParameterCodeRepository)
    private readonly parameterCodeRepository: ParameterCodeRepository,
    private readonly Logger: Logger
  ) {}

  async getParameterCodes(): Promise<ParameterCodeDTO[]> {


    this.Logger.info('Getting parameter codes');
    let result;
    try {
      result = await this.parameterCodeRepository.getParameterCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Getting parameter codes');

    return result;
  }
}
