import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { UnitsOfMeasureCode } from '../entities/units-of-measure-code.entity';
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
