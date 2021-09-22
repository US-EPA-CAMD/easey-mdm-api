import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { FuelCodeRepository } from './fuel-code.repository';
import { FuelCode } from '../entities/fuel-code.entity';
import { FuelCodeDTO } from '../dto/fuel-code.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
});

describe('FuelCodeRepository', () => {
  let repository: FuelCodeRepository;
  let queryBuilder: any;
  const fuelCodeDTO = new FuelCodeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FuelCodeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    repository = module.get<FuelCodeRepository>(FuelCodeRepository);
    queryBuilder = module.get<SelectQueryBuilder<FuelCode>>(SelectQueryBuilder);

    repository.createQueryBuilder = jest.fn().mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(fuelCodeDTO);
  });

  describe('getAllControlTechnologies', () => {
    it('calls createQueryBuilder and gets all fuel codes from the repository', async () => {
      let result = await repository.getFuelCodes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(fuelCodeDTO);
    });
  });
});
