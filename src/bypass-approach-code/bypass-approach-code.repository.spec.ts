import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { BypassApproachCodeRepository } from './bypass-approach-code.repository';
import { BypassApproachCode } from '../entities/bypass-approach-code.entity';
import { BypassApproachCodeDTO } from '../dto/bypass-approach-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('BypassApproachCodeRepository', () => {
  let repository: BypassApproachCodeRepository;
  let queryBuilder: any;
  const data = new BypassApproachCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        BypassApproachCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<BypassApproachCodeRepository>(
      BypassApproachCodeRepository,
    );
    queryBuilder = module.get<SelectQueryBuilder<BypassApproachCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(data);
  });

  describe('getBypassApproachCodes', () => {
    it('calls createQueryBuilder and gets all bypass-approach codes from the repository', async () => {
      let result = await repository.getBypassApproachCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
