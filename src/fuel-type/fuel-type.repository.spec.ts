import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { FuelTypeRepository } from './fuel-type.repository';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  innerJoin: jest.fn(),
  orderBy: jest.fn(),
  getMany: jest.fn(),  
});

describe('FuelTypeRepository', () => {
  let queryBuilder: any;
  let repository: FuelTypeRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FuelTypeRepository,
        {
          provide: SelectQueryBuilder,
          useFactory: mockQueryBuilder
        },
      ],
    }).compile();

    repository = module.get(FuelTypeRepository);
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

  describe('getFuelTypeCodes', () => {

    it('should return a list of fuel type codes', async () => {
     const results = await repository.getFuelTypeCodes();
      expect(queryBuilder.select).toHaveBeenCalled();
      expect(queryBuilder.innerJoin).toHaveBeenCalled();
      expect(queryBuilder.orderBy).toHaveBeenCalled();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });
});
