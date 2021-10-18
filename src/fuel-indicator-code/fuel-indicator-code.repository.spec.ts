import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { FuelIndicatorCodeRepository } from './fuel-indicator-code.repository';
import { FuelIndicatorCode } from '../entities/fuel-indicator-code.entity';
import { FuelIndicatorCodeDTO } from '../dto/fuel-indicator-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('FuelIndicatorCodeRepository', () => {
  let repository: FuelIndicatorCodeRepository;
  let queryBuilder: any;
  const fuelCodeDTO = new FuelIndicatorCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FuelIndicatorCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<FuelIndicatorCodeRepository>(
      FuelIndicatorCodeRepository,
    );
    queryBuilder = module.get<SelectQueryBuilder<FuelIndicatorCode>>(
      SelectQueryBuilder,
    );

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(fuelCodeDTO);
  });

  describe('getAllControlTechnologies', () => {
    it('calls createQueryBuilder and gets all fuel indicator codes from the repository', async () => {
      let result = await repository.getFuelIndicatorCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(fuelCodeDTO);
    });
  });
});
