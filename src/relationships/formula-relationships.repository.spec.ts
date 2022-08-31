import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { FormulaRelationships } from '../entities/vw-formula-master-data-relationships.entity';
import { FormulaRelationshipsRepository } from './formula-relationships.repository';
import { FormulaRelationshipsDTO } from '../dto/formula-relationships.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('FormulaRelationshipsRepository', () => {
  let formulaRelationshipsRepository;
  let queryBuilder;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FormulaRelationshipsRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    formulaRelationshipsRepository = module.get<FormulaRelationshipsRepository>(
      FormulaRelationshipsRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<FormulaRelationships>>(
      SelectQueryBuilder,
    );

    formulaRelationshipsRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(FormulaRelationshipsDTO);
  });

  describe('getFormulaRelationships', () => {
    it('calls createQueryBuilder and gets all formula master data relationships codes from the repository', async () => {
      let result = await formulaRelationshipsRepository.getFormulaRelationships();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(FormulaRelationshipsDTO);
    });
  });
});
