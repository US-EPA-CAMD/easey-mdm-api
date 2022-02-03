import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { SystemFuelFlowRelationships } from '../entities/vw-system-fuel-flow-master-data-relationships.entity';
import { SystemFuelFlowRelationshipsRepository } from './system-fuel-flow-relationships.repository';
import { SystemFuelFlowRelationshipsDTO } from '../dto/sytem-fuel-flow-relationships.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('SystemFuelFlowRelationshipsRepository', () => {
  let repository;
  let queryBuilder;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        SystemFuelFlowRelationshipsRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<SystemFuelFlowRelationshipsRepository>(
      SystemFuelFlowRelationshipsRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<SystemFuelFlowRelationships>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(SystemFuelFlowRelationshipsDTO);
  });

  describe('getSystemFuelFlowRelationships', () => {
    it('calls createQueryBuilder and gets all system fuel flow master data relationships from the repository', async () => {
      let result = await repository.getSystemFuelFlowRelationships();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(SystemFuelFlowRelationshipsDTO);
    });
  });
});
