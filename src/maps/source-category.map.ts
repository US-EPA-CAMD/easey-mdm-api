import { Injectable } from '@nestjs/common';

import { SourceCategoryDTO } from '../dto/source-category.dto';
import { SourceCategory } from '../entities/source-category-code.entity';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

@Injectable()
export class SourceCategoryMap extends BaseMap<
  SourceCategory,
  SourceCategoryDTO
> {
  public async one(entity: SourceCategory): Promise<SourceCategoryDTO> {
    return {
      sourceCategoryCode: entity.sourceCategoryCode,
      sourceCategoryDescription: entity.sourceCategoryDescription,
    };
  }
}
