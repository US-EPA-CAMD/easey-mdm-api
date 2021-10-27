import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { QualLeeTestTypeCode } from '../entities/qual-lee-test-type-code.entity';
import { QualLeeTestTypeCodeRepository } from './qual-lee-test-type-code.repository';
import { QualLeeTestTypeCodeDTO } from '../dto/qual-lee-test-type-code.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('QualLeeTestTypeCodeRepository', () => {
  let qualLeeTestTypeCodeRepository;
  let queryBuilder;
  const qualLeeTestTypeCodeDTO = new QualLeeTestTypeCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        QualLeeTestTypeCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    qualLeeTestTypeCodeRepository = module.get<QualLeeTestTypeCodeRepository>(
      QualLeeTestTypeCodeRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<QualLeeTestTypeCode>>(
      SelectQueryBuilder,
    );

    qualLeeTestTypeCodeRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(QualLeeTestTypeCodeDTO);
  });

  describe('getQualLeeTestTypeCodes', () => {
    it('calls createQueryBuilder and gets all qual LEE test type codes from the repository', async () => {
      let result = await qualLeeTestTypeCodeRepository.getQualLeeTestTypeCodes();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(QualLeeTestTypeCodeDTO);
    });
  });
});
