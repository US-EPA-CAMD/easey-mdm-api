import { Injectable } from '@nestjs/common';
import { BaseMap } from './base.map';
import { MaximumFuelFlowRateCode } from '../entities/maximum-fuel-flow-rate-code.entity';
import { MaximumFuelFlowRateCodeDTO } from '../dto/maximum-fuel-flow-rate-code.dto';

@Injectable()
export class MaximumFuelFlowRateCodeMap extends BaseMap<
  MaximumFuelFlowRateCode,
  MaximumFuelFlowRateCodeDTO
> {
  public async one(
    entity: MaximumFuelFlowRateCode,
  ): Promise<MaximumFuelFlowRateCodeDTO> {
    return {
      maximumFuelFlowRateSourceCode: entity.maximumFuelFlowRateSourceCode,
      maximumFuelFlowRateSourceCodeDescription:
        entity.maximumFuelFlowRateSourceCodeDescription,
    };
  }
}
