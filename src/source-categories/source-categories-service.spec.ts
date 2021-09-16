import { Test } from '@nestjs/testing';

import { SourceCategoriesService } from './source-categories.service';
import { SourceCategoryRepository } from './source-category-code.repository';
import { SourceCategoryMap } from '../maps/source-category.map';
import { SourceCategory } from '../entities/source-category-code.entity';
import { SourceCategoryDTO } from '../dto/source-category.dto';

const mockSourceCategoryRepository = () => ({
  find: jest.fn(),
});

describe('-- Source Categories Service --', () => {
  let sourceCategoriesService;
  let sourceCategoryRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        SourceCategoriesService,
        {
          provide: SourceCategoryRepository,
          useFactory: mockSourceCategoryRepository,
        },
        SourceCategoryMap,
      ],
    }).compile();

    sourceCategoriesService = module.get(SourceCategoriesService);
    sourceCategoryRepository = module.get(SourceCategoryRepository);
  });

  describe('getAllSourceCategories', () => {
    it('calls repository.find() and returns all valid source categories', async () => {
      let sourceCategoryEntity: SourceCategory = new SourceCategory();
      sourceCategoryEntity.sourceCategoryCode = '';
      sourceCategoryEntity.sourceCategoryDescription = '';

      let sourceCategoryDTO = new SourceCategoryDTO();

      sourceCategoryDTO = {
        sourceCategoryCode: '',
        sourceCategoryDescription: '',
      };

      sourceCategoryRepository.find.mockResolvedValue([sourceCategoryEntity]);

      let result = await sourceCategoriesService.getAllSourceCategories();

      expect(sourceCategoryRepository.find).toHaveBeenCalled();
      expect(result).toEqual([sourceCategoryDTO]);
    });
  });
});
