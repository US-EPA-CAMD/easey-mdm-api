import { Injectable } from '@nestjs/common';
import { BaseMap } from './base.map';
import { UnitsOfMeasureCode } from '../entities/system-fuel-flow-uom-code.entity';
import { UnitsOfMeasureCodeDTO } from '../dto/units-of-measure-code.dto';

@Injectable()
export class UnitsOfMeasureCodeMap extends BaseMap<
  UnitsOfMeasureCode,
  UnitsOfMeasureCodeDTO
> {
  public async one(entity: UnitsOfMeasureCode): Promise<UnitsOfMeasureCodeDTO> {
    return {
      unitsOfMeasureCode: entity.unitsOfMeasureCode,
      unitsOfMeasureCodeDescription: entity.unitsOfMeasureCodeDescription,
    };
  }
}
