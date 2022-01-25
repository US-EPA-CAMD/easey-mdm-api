import { SelectQueryBuilder } from 'typeorm';
import { Test } from '@nestjs/testing';

import { MatsMethodsRelationships } from '../entities/vw-mats-methods-master-data-relationships.entity';
import { MatsMethodsRelationshipsRepository } from './mats-methods-relationships.repository';
import { MatsMethodsRelationshipsDTO } from '../dto/mats-methods-relationships.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('MatsMethodsRelationshipsRepository', () => {
  let matsMethodsRelationshipsRepository;
  let queryBuilder;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        MatsMethodsRelationshipsRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    matsMethodsRelationshipsRepository = module.get<
      MatsMethodsRelationshipsRepository
    >(MatsMethodsRelationshipsRepository);

    queryBuilder = module.get<SelectQueryBuilder<MatsMethodsRelationships>>(
      SelectQueryBuilder,
    );

    matsMethodsRelationshipsRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(MatsMethodsRelationshipsDTO);
  });

  describe('getMatsMethodsRelationships', () => {
    it('calls createQueryBuilder and gets all mats-methods master data relationships from the repository', async () => {
      let result = await matsMethodsRelationshipsRepository.getMatsMethodsRelationships();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(MatsMethodsRelationshipsDTO);
    });
  });
});
