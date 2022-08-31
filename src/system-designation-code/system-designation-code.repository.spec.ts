import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { SystemDesignationCodeRepository } from './system-designation-code.repository';
import { SystemDesignationCode } from '../entities/system-designation-code.entity';
import { SystemDesignationCodeDTO } from '../dto/system-designation-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('SystemDesignationCodeRepository', () => {
  let repository: SystemDesignationCodeRepository;
  let queryBuilder: any;
  const defaultPurposeCodeDTO = new SystemDesignationCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        SystemDesignationCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<SystemDesignationCodeRepository>(
      SystemDesignationCodeRepository,
    );
    queryBuilder = module.get<SelectQueryBuilder<SystemDesignationCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(defaultPurposeCodeDTO);
  });

  describe('getSystemDesignationCodes', () => {
    it('calls createQueryBuilder and gets all system designation codes from the repository', async () => {
      let result = await repository.getSystemDesignationCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(defaultPurposeCodeDTO);
    });
  });
});
