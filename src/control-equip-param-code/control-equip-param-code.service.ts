import { Injectable } from '@nestjs/common';
import { ControlEquipParamCodeDTO } from '../dto/control-equip-param-code.dto';
import { ControlEquipParamCodeRepository } from './control-equip-param-code.repository';

@Injectable()
export class ControlEquipParamCodeService {
  constructor(private readonly repository: ControlEquipParamCodeRepository) {}

  async getControlEquipParamCodes(): Promise<ControlEquipParamCodeDTO[]> {
    return this.repository.getControlEquipParamCodes();
  }
}
