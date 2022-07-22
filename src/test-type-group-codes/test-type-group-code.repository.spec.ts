import { Test } from '@nestjs/testing';
import { TestTypeGroupCodeDTO } from '../dto/test-type-group-code.dto';
import { TestTypeGroupCode } from '../entities/test-type-group-code.entity';
import { SelectQueryBuilder } from 'typeorm';
import { TestTypeGroupCodeRepository } from './test-type-group-code.repository';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('TestTypeGroupCodeRepository', () => {
  let repository;
  let queryBuilder;
  const testTypeGroupCodeDTO = new TestTypeGroupCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TestTypeGroupCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<TestTypeGroupCodeRepository>(
      TestTypeGroupCodeRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<TestTypeGroupCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
  });

  describe('getTestTypeGroupCodes', () => {
    it('calls createQueryBuilder and gets all test type group codes from the repository', async () => {
      queryBuilder.select.mockReturnValue(queryBuilder);
      queryBuilder.getMany.mockReturnValue(testTypeGroupCodeDTO);

      let result = await repository.getTestTypeGroupCodes();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(testTypeGroupCodeDTO);
    });
  });
});
