import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';
import { FuelTypeRepository } from './fuel-type-code.repository';
import { FuelType } from '../entities/fuel-type-code.entity';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
  innerJoin: jest.fn(),
  orderBy: jest.fn(),
});

describe('FuelTypeRepository', () => {
  let fuelTypeRepository;
  let queryBuilder;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FuelTypeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    fuelTypeRepository = module.get<FuelTypeRepository>(FuelTypeRepository);

    queryBuilder = module.get<SelectQueryBuilder<FuelType>>(SelectQueryBuilder);

    fuelTypeRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.innerJoin.mockReturnValue(queryBuilder);
    queryBuilder.orderBy.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue('mockFuelTypes');
  });

  describe('getAllFuelTypes', () => {
    it('calls createQueryBuilder and gets all fuelTypes from the repository', async () => {
      let result = await fuelTypeRepository.getAllFuelTypes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual('mockFuelTypes');
    });
  });
});
