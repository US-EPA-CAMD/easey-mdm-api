import { Test } from '@nestjs/testing';

import { FuelTypesService } from './fuel-types.service';
import { FuelTypeRepository } from './fuel-type-code.repository';
import { FuelTypeMap } from '../maps/fuel-type.map';

const mockFuelTypeRepository = () => ({
  getAllFuelTypes: jest.fn(),
});

const mockMap = () => ({
  many: jest.fn(),
});

describe('-- Fuel Types Service --', () => {
  let fuelTypesService;
  let fuelTypeRepository;
  let fuelTypesMap;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FuelTypesService,
        {
          provide: FuelTypeRepository,
          useFactory: mockFuelTypeRepository,
        },
        { provide: FuelTypeMap, useFactory: mockMap },
      ],
    }).compile();

    fuelTypesService = module.get(FuelTypesService);
    fuelTypeRepository = module.get(FuelTypeRepository);
    fuelTypesMap = module.get(FuelTypeMap);
  });

  describe('getAllFuelTypes', () => {
    it('calls repository.getAllFuelTypes() and returns all valid fuel types', async () => {
      fuelTypeRepository.getAllFuelTypes.mockResolvedValue(
        'list of fuel types',
      );
      fuelTypesMap.many.mockReturnValue('mapped DTOs');

      let result = await fuelTypesService.getAllFuelTypes();

      expect(fuelTypeRepository.getAllFuelTypes).toHaveBeenCalled();
      expect(fuelTypesMap.many).toHaveBeenCalled();
      expect(result).toEqual('mapped DTOs');
    });
  });
});
