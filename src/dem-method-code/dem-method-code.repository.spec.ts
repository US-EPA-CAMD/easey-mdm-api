import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { DemMethodCodeRepository } from './dem-method-code.repository';
import { DemMethodCode } from '../entities/dem-method-code.entity';
import { DemMethodCodeDTO } from '../dto/dem-method-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('DemMethodCodeRepository', () => {
  let repository: DemMethodCodeRepository;
  let queryBuilder: any;
  const fuelCodeDTO = new DemMethodCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DemMethodCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<DemMethodCodeRepository>(DemMethodCodeRepository);
    queryBuilder = module.get<SelectQueryBuilder<DemMethodCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(fuelCodeDTO);
  });

  describe('getAllControlTechnologies', () => {
    it('calls createQueryBuilder and gets all demonstration method codes from the repository', async () => {
      let result = await repository.getDemMethodCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(fuelCodeDTO);
    });
  });
});
