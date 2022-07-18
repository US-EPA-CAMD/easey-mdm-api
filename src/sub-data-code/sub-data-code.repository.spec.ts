import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { SubDataCodeRepository } from './sub-data-code.repository';
import { SubDataCode } from '../entities/sub-data-code.entity';
import { SubDataCodeDTO } from '../dto/sub-data-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('SubDataCodeRepository', () => {
  let repository: SubDataCodeRepository;
  let queryBuilder: any;
  const data = new SubDataCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        SubDataCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<SubDataCodeRepository>(SubDataCodeRepository);
    queryBuilder = module.get<SelectQueryBuilder<SubDataCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(data);
  });

  describe('getSubDataCodes', () => {
    it('calls createQueryBuilder and gets all sub-data codes from the repository', async () => {
      let result = await repository.getSubDataCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
