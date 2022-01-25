import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { MethodsRelationships } from '../entities/vw-methods-master-data-relationships.entity';
import { MethodsRelationshipsRepository } from './methods-relationships.repository';
import { MethodsRelationshipsDTO } from '../dto/methods-relationships.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('MethodsRelationshipsRepository', () => {
  let methodsRelationshipsRepository;
  let queryBuilder;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        MethodsRelationshipsRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    methodsRelationshipsRepository = module.get<MethodsRelationshipsRepository>(
      MethodsRelationshipsRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<MethodsRelationships>>(
      SelectQueryBuilder,
    );

    methodsRelationshipsRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(MethodsRelationshipsDTO);
  });

  describe('getMethodsRelationships', () => {
    it('calls createQueryBuilder and gets all methods master data relationships from the repository', async () => {
      let result = await methodsRelationshipsRepository.getMethodsRelationships();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(MethodsRelationshipsDTO);
    });
  });
});
