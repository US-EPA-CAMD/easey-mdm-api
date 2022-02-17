import { Injectable } from '@nestjs/common';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { SourceCategoryDTO } from '../dto/source-category.dto';
import { SourceCategory } from '../entities/source-category-code.entity';

@Injectable()
export class SourceCategoryMap extends BaseMap<
  SourceCategory,
  SourceCategoryDTO
> {
  public async one(entity: SourceCategory): Promise<any> {
    return {
      [propertyMetadata.sourceCategoryCode.fieldLabels.value]:
        entity.sourceCategoryCode,
      [propertyMetadata.sourceCategoryDescription.fieldLabels.value]:
        entity.sourceCategoryDescription,
    };
  }
}
