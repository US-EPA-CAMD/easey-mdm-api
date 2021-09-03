import { Injectable } from '@nestjs/common';
import { BaseMap } from './base.map';
import { AcquisitionMethodCode } from '../entities/acquisition-method-code.entity';
import { AcquisitionMethodCodeDTO } from '../dto/acquisition-method-code.dto';

@Injectable()
export class AcquisitionMethodCodeMap extends BaseMap<
  AcquisitionMethodCode,
  AcquisitionMethodCodeDTO
> {
  public async one(
    entity: AcquisitionMethodCode,
  ): Promise<AcquisitionMethodCodeDTO> {
    return {
      acquisitionMethodCode: entity.acquisitionMethodCode,
      acquisitionMethodCodeDescription: entity.acquisitionMethodCodeDescription,
    };
  }
}
