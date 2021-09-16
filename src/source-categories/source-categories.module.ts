import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SourceCategoriesController } from './source-categories.controller';
import { SourceCategoryMap } from '../maps/source-category.map';
import { SourceCategoriesService } from './source-categories.service';
import { SourceCategoryRepository } from './source-category-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SourceCategoryRepository])],
  controllers: [SourceCategoriesController],
  providers: [SourceCategoryMap, SourceCategoriesService],
})
export class SourceCategoriesModule {}
