import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { UnitTypeRepository } from './unit-type-code.repository';
import { UnitType } from '../entities/unit-type-code.entity';
import { UnitTypeDTO } from '../dto/unit-type.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
  innerJoin: jest.fn(),
  orderBy: jest.fn(),
});

describe('UnitTypeRepository', () => {
  let unitTypeRepository;
  let queryBuilder;
  const unitTypeDTO = new UnitTypeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UnitTypeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    unitTypeRepository = module.get<UnitTypeRepository>(UnitTypeRepository);

    queryBuilder = module.get<SelectQueryBuilder<UnitType>>(SelectQueryBuilder);

    unitTypeRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.innerJoin.mockReturnValue(queryBuilder);
    queryBuilder.orderBy.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(unitTypeDTO);
  });

  describe('getAllUnitTypes', () => {
    it('calls createQueryBuilder and gets all unitTypes from the repository', async () => {
      let result = await unitTypeRepository.getAllUnitTypes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(unitTypeDTO);
    });
  });
});
