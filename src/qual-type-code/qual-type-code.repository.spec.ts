import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { QualTypeCode } from '../entities/qual-type-code.entity';
import { QualTypeCodeRepository } from './qual-type-code.repository';
import { QualTypeCodeDTO } from '../dto/qual-type-code.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('QualTypeCodeRepository', () => {
  let qualTypeCodeRepository;
  let queryBuilder;
  const qualTypeCodeDTO = new QualTypeCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        QualTypeCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    qualTypeCodeRepository = module.get<QualTypeCodeRepository>(
      QualTypeCodeRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<QualTypeCode>>(
      SelectQueryBuilder,
    );

    qualTypeCodeRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(QualTypeCodeDTO);
  });

  describe('getQualTypeCodes', () => {
    it('calls createQueryBuilder and gets all qual type codes from the repository', async () => {
      let result = await qualTypeCodeRepository.getQualTypeCodes();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(QualTypeCodeDTO);
    });
  });
});
