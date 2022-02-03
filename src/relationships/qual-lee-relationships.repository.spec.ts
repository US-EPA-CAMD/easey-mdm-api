import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { QualLeeRelationships } from '../entities/vw-quallee-master-data-relationships.entity';
import { QualLeeRelationshipsRepository } from './qual-lee-relationships.repository';
import { QualLeeRelationshipsDTO } from '../dto/qual-lee-relationships.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('QualLeeRelationshipsRepository', () => {
  let qualLeeRelationshipsRepository;
  let queryBuilder;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        QualLeeRelationshipsRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    qualLeeRelationshipsRepository = module.get<QualLeeRelationshipsRepository>(
      QualLeeRelationshipsRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<QualLeeRelationships>>(
      SelectQueryBuilder,
    );

    qualLeeRelationshipsRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(QualLeeRelationshipsDTO);
  });

  describe('getQualLeeRelationships', () => {
    it('calls createQueryBuilder and gets all LEE qualifications master data relationships from the repository', async () => {
      let result = await qualLeeRelationshipsRepository.getQualLeeRelationships();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(QualLeeRelationshipsDTO);
    });
  });
});
