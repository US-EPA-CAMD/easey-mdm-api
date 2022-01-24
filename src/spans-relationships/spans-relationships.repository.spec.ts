import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { SpansRelationships } from '../entities/spans-relationships.entity';
import { SpansRelationshipsRepository } from './spans-relationships.repository';
import { SpansRelationshipsDTO } from '../dto/spans-relationships.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('SpansRelationshipsRepository', () => {
  let spansRelationshipsRepository;
  let queryBuilder;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        SpansRelationshipsRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    spansRelationshipsRepository = module.get<SpansRelationshipsRepository>(
      SpansRelationshipsRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<SpansRelationships>>(
      SelectQueryBuilder,
    );

    spansRelationshipsRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(SpansRelationshipsDTO);
  });

  describe('getSpansRelationships', () => {
    it('calls createQueryBuilder and gets all WAF method codes from the repository', async () => {
      let result = await spansRelationshipsRepository.getSpansRelationships();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(SpansRelationshipsDTO);
    });
  });
});
