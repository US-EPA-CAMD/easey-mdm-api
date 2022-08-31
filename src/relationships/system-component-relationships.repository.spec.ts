import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { SystemComponentRelationships } from '../entities/vw-systemcomponent-master-data-relationships.entity';
import { SystemComponentRelationshipsDTO } from '../dto/systems-component-relationships.dto';
import { SystemComponentRelationshipsRepository } from './system-component-relationships.repository';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('SystemComponentRelationshipsRepository', () => {
  let repository: SystemComponentRelationshipsRepository;
  let queryBuilder;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        SystemComponentRelationshipsRepository,
        {
          provide: SelectQueryBuilder,
          useFactory: mockQueryBuilder,
        },
      ],
    }).compile();

    repository = module.get<SystemComponentRelationshipsRepository>(
      SystemComponentRelationshipsRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<SystemComponentRelationships>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue([SystemComponentRelationshipsDTO]);
  });

  describe('getSystemComponentRelationships', () => {
    it('calls createQueryBuilder and gets all system component master data relationships from the repository', async () => {
      const result = await repository.getSystemComponentRelationships();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual([SystemComponentRelationshipsDTO]);
    });
  });
});
