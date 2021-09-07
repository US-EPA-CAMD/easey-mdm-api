import { BaseMap } from './base.map';
import { BasisCode } from '../entities/basis-code.entity';
import { BasisCodeDTO } from '../dto/basis-code.dto';

export class BasisCodeMap extends BaseMap<BasisCode, BasisCodeDTO> {
  public async one(entity: BasisCode): Promise<BasisCodeDTO> {
    return {
      basisCode: entity.basisCode,
      basisCodeDescription: entity.basisCodeDescription,
      basisCategory: entity.basisCategory,
    };
  }
}
