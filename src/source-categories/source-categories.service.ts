import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions } from 'typeorm';

import { SourceCategoryRepository } from './source-category-code.repository';
import { SourceCategoryMap } from '../maps/source-category.map';
import { SourceCategoryDTO } from '../dto/source-category.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';

@Injectable()
export class SourceCategoriesService {
  constructor(
    @InjectRepository(SourceCategoryRepository)
    private readonly repository: SourceCategoryRepository,
    private readonly map: SourceCategoryMap,
    private readonly Logger: Logger,
  ) {}

  async getAllSourceCategories(): Promise<SourceCategoryDTO[]> {
    const findOpts: FindManyOptions = {
      select: ['sourceCategoryCode', 'sourceCategoryDescription'],
      order: { sourceCategoryCode: 'ASC' },
    };

    this.Logger.info('Getting all source categories');
    let query;
    try {
      query = await this.repository.find(findOpts);
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got all source categories');

    return this.map.many(query);
  }
}
