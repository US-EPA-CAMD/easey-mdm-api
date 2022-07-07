import { Test } from '@nestjs/testing';
import { GasTypeCodeDTO } from '../dto/gas-type-code.dto';
import { SelectQueryBuilder } from 'typeorm';
import { GasTypeCodeRepository } from './gas-type-code.repository';
import { GasTypeCode } from 'src/entities/gas-type-code.entity';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('GasTypeCodeRepository', () => {
  let repository;
  let queryBuilder;
  const gasTypeCodeDTO = new GasTypeCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        GasTypeCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<GasTypeCodeRepository>(GasTypeCodeRepository);

    queryBuilder = module.get<SelectQueryBuilder<GasTypeCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
  });

  describe('getGasTypeCodes', () => {
    it('calls createQueryBuilder and gets all gas type codes from the repository', async () => {
      queryBuilder.select.mockReturnValue(queryBuilder);
      queryBuilder.getMany.mockReturnValue(gasTypeCodeDTO);

      let result = await repository.getGasTypeCodes();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(gasTypeCodeDTO);
    });
  });
});
