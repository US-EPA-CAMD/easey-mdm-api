import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { ProbeTypeCode } from '../entities/probe-type-code.entity';
import { ProbeTypeCodeRepository } from './probe-type-code.repository';
import { ProbeTypeCodeDTO } from '../dto/probe-type-code.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  getMany: jest.fn(),
});

describe('ProbeTypeCodeRepository', () => {
  let probeTypeCodeRepository;
  let queryBuilder;
  const probeTypeCodeDTO = new ProbeTypeCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ProbeTypeCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    probeTypeCodeRepository = module.get<ProbeTypeCodeRepository>(
      ProbeTypeCodeRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<ProbeTypeCode>>(
      SelectQueryBuilder,
    );

    probeTypeCodeRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(ProbeTypeCodeDTO);
  });

  describe('getProbeTypeCodes', () => {
    it('calls createQueryBuilder and gets all probe type codes from the repository', async () => {
      let result = await probeTypeCodeRepository.getProbeTypeCodes();

      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(ProbeTypeCodeDTO);
    });
  });
});
