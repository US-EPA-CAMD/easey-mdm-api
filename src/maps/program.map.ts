import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { Program } from '../entities/program.entity';
import { ProgramDTO } from '../dto/program.dto';

@Injectable()
export class ProgramMap extends BaseMap<Program, ProgramDTO> {
  public async one(entity: Program): Promise<ProgramDTO> {
    return {
      programCode:
        entity.programCode,
      programDescription:
        entity.programDescription,
      compParameter:
        entity.compParameter,
      programGroupCode:
        entity.programGroupCode,
      programGroupDescription:
        entity.programGroup?.programGroupDescription,
      ozoneIndicator:
        !!+entity.ozoneIndicator,
      annualIndicator:
        !+entity.ozoneIndicator,
      emissionsUIFilter:
        !!+entity.emissionsUIFilter,
      allowanceUIFilter:
        !!+entity.allowanceUIFilter,
      complianceUIFilter:
        !!+entity.complianceUIFilter,
      retiredIndicator:
        !!entity.tradingEndDate && entity.tradingEndDate <= new Date(),
      tradingEndDate:
        entity.tradingEndDate &&
        entity.tradingEndDate.toISOString()
        .split('T')[0],
    };
  }
}
