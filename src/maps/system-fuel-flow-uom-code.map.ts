import { Injectable } from '@nestjs/common';
import { BaseMap } from './base.map';
import { SystemFuelFlowUOMCode } from '../entities/system-fuel-flow-uom-code.entity';
import { SystemFuelFlowUOMCodeDTO } from '../dto/system-fuel-flow-uom-code.dto';

@Injectable()
export class SystemFuelFlowUOMCodeMap extends BaseMap<
  SystemFuelFlowUOMCode,
  SystemFuelFlowUOMCodeDTO
> {
  public async one(
    entity: SystemFuelFlowUOMCode,
  ): Promise<SystemFuelFlowUOMCodeDTO> {
    return {
      systemFuelFlowUOMCode: entity.systemFuelFlowUOMCode,
      systemFuelFlowUOMCodeDescription: entity.systemFuelFlowUOMCodeDescription,
    };
  }
}
