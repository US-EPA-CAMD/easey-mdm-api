import { Test } from '@nestjs/testing';

import { FuelTypesService } from './fuel-types.service';
import { FuelTypesRepository } from './fuel-types.repository';
import { FuelTypeMap } from '../maps/fuel-type.map';

const mockFuelTypesRepository = () => ({
  find: jest.fn(),
});

const mockMap = () => ({
  many: jest.fn(),
});

describe('-- Fuel Types Service --', () => {
  let fuelTypesService;
  let fuelTypesRepository;
  let fuelTypesMap;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FuelTypesService,
        {
          provide: FuelTypesRepository,
          useFactory: mockFuelTypesRepository,
        },
        { provide: FuelTypeMap, useFactory: mockMap },
      ],
    }).compile();

    fuelTypesService = module.get(FuelTypesService);
    fuelTypesRepository = module.get(FuelTypesRepository);
    fuelTypesMap = module.get(FuelTypeMap);
  });

  describe('getAllFuelTypes', () => {
    it('calls repository.find() and returns all valid fuel types', async () => {
      fuelTypesRepository.find.mockResolvedValue('list of fuel types');
      fuelTypesMap.many.mockReturnValue('mapped DTOs');

      let result = await fuelTypesService.getAllFuelTypes();

      expect(fuelTypesRepository.find).toHaveBeenCalled();
      expect(fuelTypesMap.many).toHaveBeenCalled();
      expect(result).toEqual('mapped DTOs');
    });
  });
});
