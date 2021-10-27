import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { QualDataTypeCode } from '../entities/qual-data-type-code.entity';
import { QualDataTypeCodeRepository } from './qual-data-type-code.repository';
import { QualDataTypeCodeDTO } from '../dto/qual-data-type-code.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('QualDataTypeCodeRepository', () => {
  let qualDataTypeCodeRepository;
  let queryBuilder;
  const qualDataTypeCodeDTO = new QualDataTypeCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        QualDataTypeCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    qualDataTypeCodeRepository = module.get<QualDataTypeCodeRepository>(
      QualDataTypeCodeRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<QualDataTypeCode>>(
      SelectQueryBuilder,
    );

    qualDataTypeCodeRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(QualDataTypeCodeDTO);
  });

  describe('getQualDataTypeCodes', () => {
    it('calls createQueryBuilder and gets all qual data type codes from the repository', async () => {
      let result = await qualDataTypeCodeRepository.getQualDataTypeCodes();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(QualDataTypeCodeDTO);
    });
  });
});
