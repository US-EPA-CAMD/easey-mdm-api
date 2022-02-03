import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { UnitControlRelationships } from '../entities/vw-unitcontrol-master-data-relationships.entity';
import { UnitControlRelationshipsRepository } from './unit-control-relationships.repository';
import { UnitControlRelationshipsDTO } from '../dto/unit-control-relationships.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('UnitControlRelationshipsRepository', () => {
  let unitControlRelationshipsRepository;
  let queryBuilder;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UnitControlRelationshipsRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    unitControlRelationshipsRepository = module.get<
      UnitControlRelationshipsRepository
    >(UnitControlRelationshipsRepository);

    queryBuilder = module.get<SelectQueryBuilder<UnitControlRelationships>>(
      SelectQueryBuilder,
    );

    unitControlRelationshipsRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(UnitControlRelationshipsDTO);
  });

  describe('getUnitControlRelationships', () => {
    it('calls createQueryBuilder and gets all unit control master data relationships from the repository', async () => {
      let result = await unitControlRelationshipsRepository.getUnitControlRelationships();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(UnitControlRelationshipsDTO);
    });
  });
});
