import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { OperatingConditionCodeRepository } from './operating-condition-code.repository';
import { OperatingConditionCode } from '../entities/operating-condition-code.entity';
import { OperatingConditionCodeDTO } from '../dto/operating-condition-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('OperatingConditionCodeRepository', () => {
  let repository: OperatingConditionCodeRepository;
  let queryBuilder: any;
  const data = new OperatingConditionCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        OperatingConditionCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<OperatingConditionCodeRepository>(
      OperatingConditionCodeRepository,
    );
    queryBuilder = module.get<SelectQueryBuilder<OperatingConditionCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(data);
  });

  describe('getOperatingConditionCodes', () => {
    it('calls createQueryBuilder and gets all operating-condition codes from the repository', async () => {
      let result = await repository.getOperatingConditionCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
