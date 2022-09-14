import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { ControlEquipParamCodeDTO } from '../dto/control-equip-param-code.dto';
import { ControlEquipParamCodeRepository } from './control-equip-param-code.repository';

@Injectable()
export class ControlEquipParamCodeService {
  constructor(
    private readonly repository: ControlEquipParamCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getControlEquipParamCodes(): Promise<ControlEquipParamCodeDTO[]> {
    this.logger.info('Getting control equip param codes');
    let query;
    try {
      query = await this.repository.getControlEquipParamCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Getting control equip param codes');
    return query;
  }
}
