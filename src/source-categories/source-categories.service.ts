import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions } from 'typeorm';

import { SourceCategoryRepository } from './source-category-code.repository';
import { SourceCategoryMap } from '../maps/source-category.map';
import { SourceCategoryDTO } from '../dto/source-category.dto';

@Injectable()
export class SourceCategoriesService {
  constructor(
    @InjectRepository(SourceCategoryRepository)
    private readonly repository: SourceCategoryRepository,
    private readonly map: SourceCategoryMap,
  ) {}

  async getAllSourceCategories(): Promise<SourceCategoryDTO[]> {
    const findOpts: FindManyOptions = {
      select: ['sourceCategoryCode', 'sourceCategoryDescription'],
      order: { sourceCategoryCode: 'ASC' },
    };

    const query = await this.repository.find(findOpts);
    return this.map.many(query);
  }
}
