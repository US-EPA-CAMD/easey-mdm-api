import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { WafMethodCode } from '../entities/waf-method-code.entity';
import { WafMethodCodeRepository } from './waf-method-code.repository';
import { WafMethodCodeDTO } from '../dto/waf-method-code.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('WafMethodCodeRepository', () => {
  let wafMethodCodeRepository;
  let queryBuilder;
  const wafMethodCodeDTO = new WafMethodCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        WafMethodCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    wafMethodCodeRepository = module.get<WafMethodCodeRepository>(
      WafMethodCodeRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<WafMethodCode>>(
      SelectQueryBuilder,
    );

    wafMethodCodeRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(WafMethodCodeDTO);
  });

  describe('getWafMethodCodes', () => {
    it('calls createQueryBuilder and gets all WAF method codes from the repository', async () => {
      let result = await wafMethodCodeRepository.getWafMethodCodes();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(WafMethodCodeDTO);
    });
  });
});
