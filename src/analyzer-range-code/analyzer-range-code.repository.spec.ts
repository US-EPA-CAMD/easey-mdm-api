import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { AnalyzerRangeCodeRepository } from './analyzer-range-code.repository';
import { AnalyzerRangeCode } from '../entities/analyzer-range.entity';
import { AnalyzerRangeCodeDTO } from '../dto/analyzer-range.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('AnalyzerRangeCodeRepository', () => {
  let repository: AnalyzerRangeCodeRepository;
  let queryBuilder: any;
  const data = new AnalyzerRangeCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AnalyzerRangeCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<AnalyzerRangeCodeRepository>(
      AnalyzerRangeCodeRepository,
    );
    queryBuilder = module.get<SelectQueryBuilder<AnalyzerRangeCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(data);
  });

  describe('getAnalyzerRangeCodes', () => {
    it('calls createQueryBuilder and gets all analyzer-range-codes from the repository', async () => {
      let result = await repository.getAnalyzerRangeCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
