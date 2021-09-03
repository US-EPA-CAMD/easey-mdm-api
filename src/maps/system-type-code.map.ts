import { Injectable } from '@nestjs/common';
import { BaseMap } from './base.map';
import { SystemTypeCode } from '../entities/system-type-code.entity';
import { SystemTypeCodeDTO } from '../dto/system-type-code.dto';

@Injectable()
export class SystemTypeCodeMap extends BaseMap<
  SystemTypeCode,
  SystemTypeCodeDTO
> {
  public async one(entity: SystemTypeCode): Promise<SystemTypeCodeDTO> {
    return {
      systemTypeCode: entity.systemTypeCode,
      systemTypeCodeDescription: entity.systemTypeCodeDescription,
      parameterCode: entity.parameterCode,
    };
  }
}
