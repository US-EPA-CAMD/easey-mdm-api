import { Injectable } from '@nestjs/common';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { Program } from '../entities/program-code.entity';
import { ProgramDTO } from '../dto/program.dto';

@Injectable()
export class ProgramMap extends BaseMap<Program, ProgramDTO> {
  public async one(entity: Program): Promise<any> {
    return {
      [propertyMetadata.programCode.fieldLabels.value]: entity.programCode,
      [propertyMetadata.programDescription.fieldLabels.value]:
        entity.programDescription,
      [propertyMetadata.compParameterCode.fieldLabels.value]:
        entity.compParameterCode,
      [propertyMetadata.programGroupCode.fieldLabels.value]:
        entity.programGroupCode,
      [propertyMetadata.programGroupDescription.fieldLabels.value]:
        entity.programGroup?.programGroupDescription || null,
      [propertyMetadata.ozoneIndicator.fieldLabels
        .value]: !!+entity.ozoneIndicator,
      [propertyMetadata.annualIndicator.fieldLabels
        .value]: !+entity.ozoneIndicator,
      [propertyMetadata.emissionsUIFilter.fieldLabels
        .value]: !!+entity.emissionsUIFilter,
      [propertyMetadata.allowanceUIFilter.fieldLabels
        .value]: !!+entity.allowanceUIFilter,
      [propertyMetadata.complianceUIFilter.fieldLabels
        .value]: !!+entity.complianceUIFilter,
      [propertyMetadata.retiredIndicator.fieldLabels.value]:
        !!entity.tradingEndDate && entity.tradingEndDate <= new Date(),
      [propertyMetadata.tradingEndDate.fieldLabels.value]:
        entity.tradingEndDate &&
        entity.tradingEndDate.toISOString().split('T')[0],
    };
  }
}
