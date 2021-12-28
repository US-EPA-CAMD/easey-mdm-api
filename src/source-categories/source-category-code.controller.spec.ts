import { Test } from '@nestjs/testing';

import { SourceCategoriesController } from './source-categories.controller';
import { SourceCategoriesService } from './source-categories.service';
import { SourceCategoryMap } from '../maps/source-category.map';
import { SourceCategoryRepository } from './source-category-code.repository';
import { SourceCategoryDTO } from '../dto/source-category.dto';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

describe('-- Source Categories Controller --', () => {
  let sourceCategoriesController: SourceCategoriesController;
  let sourceCategoriesService: SourceCategoriesService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [SourceCategoriesController],
      providers: [
        SourceCategoriesService,
        SourceCategoryMap,
        SourceCategoryRepository,
      ],
    }).compile();

    sourceCategoriesController = module.get(SourceCategoriesController);
    sourceCategoriesService = module.get(SourceCategoriesService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('* getAllSourceCategories', () => {
    it('should call the service and return a list of all valid source categories', async () => {
      const expectedResult: SourceCategoryDTO[] = [];
      jest
        .spyOn(sourceCategoriesService, 'getAllSourceCategories')
        .mockResolvedValue(expectedResult);
      expect(await sourceCategoriesController.getAllSourceCategories()).toBe(
        expectedResult,
      );
    });
  });
});
