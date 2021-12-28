import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { ControlEquipParamCodeDTO } from '../dto/control-equip-param-code.dto';
import { ControlEquipParamCodeRepository } from './control-equip-param-code.repository';

@Injectable()
export class ControlEquipParamCodeService {
  constructor(
    private readonly repository: ControlEquipParamCodeRepository,
    private readonly Logger: Logger,
  ) {}

  async getControlEquipParamCodes(): Promise<ControlEquipParamCodeDTO[]> {
    this.Logger.info('Getting control equip param codes');
    let query;
    try {
      query = await this.repository.getControlEquipParamCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Getting control equip param codes');
    return query;
  }
}
