import { Repository, EntityRepository } from 'typeorm';

import { SourceCategory } from '../entities/source-category-code.entity';

@EntityRepository(SourceCategory)
export class SourceCategoryRepository extends Repository<SourceCategory> {}
