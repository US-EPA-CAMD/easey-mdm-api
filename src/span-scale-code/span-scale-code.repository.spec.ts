import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { SpanScaleCodeRepository } from './span-scale-code.repository';
import { SpanScaleCode } from '../entities/span-scale-code.entity';
import { SpanScaleCodeDTO } from '../dto/span-scale-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('SpanScaleCodeRepository', () => {
  let repository: SpanScaleCodeRepository;
  let queryBuilder: any;
  const data = new SpanScaleCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        SpanScaleCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<SpanScaleCodeRepository>(SpanScaleCodeRepository);
    queryBuilder = module.get<SelectQueryBuilder<SpanScaleCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(data);
  });

  describe('getSpanScaleCodes', () => {
    it('calls createQueryBuilder and gets all control-equip-param codes from the repository', async () => {
      let result = await repository.getSpanScaleCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
