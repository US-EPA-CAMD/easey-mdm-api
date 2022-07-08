import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { BasisCodeRepository } from './basis-code.repository';
import { BasisCode } from '../entities/basis-code.entity';
import { BasisCodeDTO } from '../dto/basis-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('BasisCodeRepository', () => {
  let repository: BasisCodeRepository;
  let queryBuilder: any;
  const data = new BasisCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        BasisCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<BasisCodeRepository>(BasisCodeRepository);
    queryBuilder = module.get<SelectQueryBuilder<BasisCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(data);
  });

  describe('getBasisCodes', () => {
    it('calls createQueryBuilder and gets all basis-codes from the repository', async () => {
      let result = await repository.getBasisCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
