import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { MaxRateSourceCodeRepository } from './max-rate-source-code.repository';
import { MaxRateSourceCode } from '../entities/max-rate-source-code.entity';
import { MaxRateSourceCodeDTO } from '../dto/max-rate-source-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('MaxRateSourceCodeRepository', () => {
  let repository: MaxRateSourceCodeRepository;
  let queryBuilder: any;
  const data = new MaxRateSourceCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        MaxRateSourceCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<MaxRateSourceCodeRepository>(
      MaxRateSourceCodeRepository,
    );
    queryBuilder = module.get<SelectQueryBuilder<MaxRateSourceCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(data);
  });

  describe('getMaxRateSourceCodes', () => {
    it('calls createQueryBuilder and gets all max-rate-source codes from the repository', async () => {
      let result = await repository.getMaxRateSourceCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
