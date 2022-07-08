import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { DefaultSourceCodeRepository } from './default-source-code.repository';
import { DefaultSourceCode } from '../entities/default-source-code.entity';
import { DefaultSourceCodeDTO } from '../dto/default-source-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('DefaultSourceCodeRepository', () => {
  let repository: DefaultSourceCodeRepository;
  let queryBuilder: any;
  const data = new DefaultSourceCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DefaultSourceCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<DefaultSourceCodeRepository>(
      DefaultSourceCodeRepository,
    );
    queryBuilder = module.get<SelectQueryBuilder<DefaultSourceCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(data);
  });

  describe('getDefaultSourceCodes', () => {
    it('calls createQueryBuilder and gets all default-source codes from the repository', async () => {
      let result = await repository.getDefaultSourceCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
