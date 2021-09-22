import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { DefaultPurposeCodeRepository } from './default-purpose-code.repository';
import { DefaultPurposeCode } from '../entities/default-purpose-code.entity';
import { DefaultPurposeCodeDTO } from '../dto/default-purpose-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('DefaultPurposeCodeRepository', () => {
  let repository: DefaultPurposeCodeRepository;
  let queryBuilder: any;
  const defaultPurposeCodeDTO = new DefaultPurposeCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DefaultPurposeCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<DefaultPurposeCodeRepository>(
      DefaultPurposeCodeRepository,
    );
    queryBuilder = module.get<SelectQueryBuilder<DefaultPurposeCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(defaultPurposeCodeDTO);
  });

  describe('getAllControlTechnologies', () => {
    it('calls createQueryBuilder and gets all default-purpose codes from the repository', async () => {
      let result = await repository.getDefaultPurposeCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(defaultPurposeCodeDTO);
    });
  });
});
