import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { SourceCategoriesService } from './source-categories.service';
import { SourceCategoryDTO } from '../dto/source-category.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Source Categories')
export class SourceCategoriesController {
  constructor(
    private readonly sourceCategoriesService: SourceCategoriesService,
  ) {}

  @Get()
  @ApiOkResponse({
    type: SourceCategoryDTO,
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
