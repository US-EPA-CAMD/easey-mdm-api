import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { UnitTypeRepository } from './unit-type.repository';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
  innerJoin: jest.fn(),
  orderBy: jest.fn(),
});

describe('UnitTypeRepository', () => {
  let queryBuilder: any;
  let repository: UnitTypeRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UnitTypeRepository,
        {
          provide: SelectQueryBuilder,
          useFactory: mockQueryBuilder
        },
      ],
    }).compile();

    repository = module.get(UnitTypeRepository);
    queryBuilder = module.get(SelectQueryBuilder);

    repository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.innerJoin.mockReturnValue(queryBuilder);
    queryBuilder.orderBy.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue([]);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(queryBuilder).toBeDefined();
  });

  describe('getUnitTypeCodes', () => {

    it('should return a list of unit type codes', async () => {
      const results = await repository.getUnitTypeCodes();
      expect(queryBuilder.select).toHaveBeenCalled();
      expect(queryBuilder.innerJoin).toHaveBeenCalled();
      expect(queryBuilder.orderBy).toHaveBeenCalled();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });
});
