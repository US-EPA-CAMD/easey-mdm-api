import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { SpanMethodCodeRepository } from './span-method-code.repository';
import { SpanMethodCode } from '../entities/span-method-code.entity';
import { SpanMethodCodeDTO } from '../dto/span-method-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('SpanMethodCodeRepository', () => {
  let repository: SpanMethodCodeRepository;
  let queryBuilder: any;
  const data = new SpanMethodCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        SpanMethodCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<SpanMethodCodeRepository>(SpanMethodCodeRepository);
    queryBuilder = module.get<SelectQueryBuilder<SpanMethodCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(data);
  });

  describe('getSpanMethodCodes', () => {
    it('calls createQueryBuilder and gets all spam-method codes from the repository', async () => {
      let result = await repository.getSpanMethodCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
