import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { LoadsRelationships } from '../entities/vw-loads-master-data-relationships.entity';
import { LoadsRelationshipsRepository } from './loads-relationships.repository';
import { LoadsRelationshipsDTO } from '../dto/loads-relationships.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('LoadsRelationshipsRepository', () => {
  let loadsRelationshipsRepository;
  let queryBuilder;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        LoadsRelationshipsRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    loadsRelationshipsRepository = module.get<LoadsRelationshipsRepository>(
      LoadsRelationshipsRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<LoadsRelationships>>(
      SelectQueryBuilder,
    );

    loadsRelationshipsRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(LoadsRelationshipsDTO);
  });

  describe('getLoadsRelationships', () => {
    it('calls createQueryBuilder and gets all loads master data relationships codes from the repository', async () => {
      let result = await loadsRelationshipsRepository.getLoadsRelationships();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(LoadsRelationshipsDTO);
    });
  });
});
