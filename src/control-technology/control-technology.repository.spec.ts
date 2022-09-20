import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { ControlTechnologyRepository } from './control-technology.repository';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  leftJoin: jest.fn(),
  orderBy: jest.fn(),
  getMany: jest.fn(),  
});

describe('ControlTechnologyRepository', () => {
  let queryBuilder: any;
  let repository: ControlTechnologyRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ControlTechnologyRepository,
        {
          provide: SelectQueryBuilder,
          useFactory: mockQueryBuilder
        },
      ],
    }).compile();

    repository = module.get(ControlTechnologyRepository);
    queryBuilder = module.get(SelectQueryBuilder);

    repository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.leftJoin.mockReturnValue(queryBuilder);
    queryBuilder.orderBy.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue([]);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(queryBuilder).toBeDefined();
  });

  describe('getControlTechnologies', () => {

    it('should return a list of control technologies', async () => {
      const results = await repository.getControlTechnologies();
      expect(queryBuilder.select).toHaveBeenCalled();
      expect(queryBuilder.leftJoin).toHaveBeenCalled();
      expect(queryBuilder.orderBy).toHaveBeenCalled();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });
});
