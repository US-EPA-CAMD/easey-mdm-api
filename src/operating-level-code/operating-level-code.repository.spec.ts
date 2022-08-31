import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { OperatingLevelCodeRepository } from './operating-level-code.repository';
import { OperatingLevelCode } from '../entities/operating-level-code.entity';
import { OperatingLevelCodeDTO } from '../dto/operating-level-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('OperatingLevelCodeRepository', () => {
  let repository: OperatingLevelCodeRepository;
  let queryBuilder: any;
  const operatingLevelCodeDTO = new OperatingLevelCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        OperatingLevelCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<OperatingLevelCodeRepository>(
      OperatingLevelCodeRepository,
    );
    queryBuilder = module.get<SelectQueryBuilder<OperatingLevelCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(operatingLevelCodeDTO);
  });

  describe('getAllControlTechnologies', () => {
    it('calls createQueryBuilder and gets all OperatingLevel codes from the repository', async () => {
      let result = await repository.getOperatingLevelCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(operatingLevelCodeDTO);
    });
  });
});
