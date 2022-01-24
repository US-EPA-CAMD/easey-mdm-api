import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { DefaultsRelationships } from '../entities/defaults-relationships.entity';
import { DefaultsRelationshipsRepository } from './defaults-relationships.repository';
import { DefaultsRelationshipsDTO } from '../dto/defaults-relationships.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('DefaultsRelationshipsRepository', () => {
  let defaultsRelationshipsRepository;
  let queryBuilder;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DefaultsRelationshipsRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    defaultsRelationshipsRepository = module.get<
      DefaultsRelationshipsRepository
    >(DefaultsRelationshipsRepository);

    queryBuilder = module.get<SelectQueryBuilder<DefaultsRelationships>>(
      SelectQueryBuilder,
    );

    defaultsRelationshipsRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(DefaultsRelationshipsDTO);
  });

  describe('getDefaultsRelationships', () => {
    it('calls createQueryBuilder and gets all default master data relationships from the repository', async () => {
      let result = await defaultsRelationshipsRepository.getDefaultsRelationships();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(DefaultsRelationshipsDTO);
    });
  });
});
