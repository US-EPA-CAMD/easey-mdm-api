import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { SourceCategoriesService } from './source-categories.service';
import { SourceCategoryDTO } from '../dto/source-category.dto';

@ApiTags('Source Categories')
@Controller()
export class SourceCategoriesController {
  constructor(
    private readonly sourceCategoriesService: SourceCategoriesService,
  ) {}

  @Get()
  @ApiOkResponse({
    description: 'Retrieved All Valid Source Categories',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource Not Found',
  })
  getAllSourceCategories(): Promise<SourceCategoryDTO[]> {
    return this.sourceCategoriesService.getAllSourceCategories();
  }
}
