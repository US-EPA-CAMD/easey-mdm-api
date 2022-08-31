import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { WafMethodCode } from '../entities/waf-method-code.entity';
import { WafMethodCodeDTO } from '../dto/waf-method-code.dto';

@Injectable()
export class WafMethodCodeMap extends BaseMap<WafMethodCode, WafMethodCodeDTO> {
  public async one(entity: WafMethodCode): Promise<WafMethodCodeDTO> {
    return {
      wafMethodCode: entity.wafMethodCode,
      wafMethodCodeDescription: entity.wafMethodCodeDescription,
    };
  }
}
