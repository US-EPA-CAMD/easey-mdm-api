import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { UnitFuelRelationships } from '../entities/vw-unitfuel-master-data-relationships.entity';
import { UnitFuelRelationshipsRepository } from './unit-fuel-relationships.repository';
import { UnitFuelRelationshipsDTO } from '../dto/unit-fuel-relationships.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('UnitFuelRelationshipsRepository', () => {
  let unitFuelRelationshipsRepository;
  let queryBuilder;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UnitFuelRelationshipsRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    unitFuelRelationshipsRepository = module.get<
      UnitFuelRelationshipsRepository
    >(UnitFuelRelationshipsRepository);

    queryBuilder = module.get<SelectQueryBuilder<UnitFuelRelationships>>(
      SelectQueryBuilder,
    );

    unitFuelRelationshipsRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(UnitFuelRelationshipsDTO);
  });

  describe('getUnitFuelRelationships', () => {
    it('calls createQueryBuilder and gets all unit fuel master data relationships from the repository', async () => {
      let result = await unitFuelRelationshipsRepository.getUnitFuelRelationships();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(UnitFuelRelationshipsDTO);
    });
  });
});
