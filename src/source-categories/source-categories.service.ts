import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions } from 'typeorm';

import { SourceCategoryRepository } from './source-category-code.repository';
import { SourceCategoryMap } from '../maps/source-category.map';
import { SourceCategoryDTO } from '../dto/source-category.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';

@Injectable()
export class SourceCategoriesService {
  constructor(
    @InjectRepository(SourceCategoryRepository)
    private readonly repository: SourceCategoryRepository,
    private readonly map: SourceCategoryMap,
    private readonly logger: Logger,
  ) {}

  async getAllSourceCategories(): Promise<SourceCategoryDTO[]> {
    const findOpts: FindManyOptions = {
      select: ['sourceCategoryCode', 'sourceCategoryDescription'],
      order: { sourceCategoryCode: 'ASC' },
    };

    this.logger.info('Getting all source categories');
    let query;
    try {
      query = await this.repository.find(findOpts);
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got all source categories');

    return this.map.many(query);
  }
}
