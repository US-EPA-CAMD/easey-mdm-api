import { Test } from '@nestjs/testing';

import { FuelTypeDTO } from '../dto/fuel-type.dto';
import { FuelTypeMap } from '../maps/fuel-type.map';
import { FuelTypesController } from './fuel-types.controller';
import { FuelTypesRepository } from './fuel-types.repository';
import { FuelTypesService } from './fuel-types.service';

describe('-- Fuel Types Controller --', () => {
  let fuelTypesController: FuelTypesController;
  let fuelTypesService: FuelTypesService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [FuelTypesController],
      providers: [FuelTypesService, FuelTypeMap, FuelTypesRepository],
    }).compile();

    fuelTypesController = module.get(FuelTypesController);
    fuelTypesService = module.get(FuelTypesService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('* getAllFuelTypes', () => {
    it('should call the service and return a list of all valid fuel types', async () => {
      const expectedResult: FuelTypeDTO[] = [];
      jest
        .spyOn(fuelTypesService, 'getAllFuelTypes')
        .mockResolvedValue(expectedResult);
      expect(await fuelTypesController.getAllFuelTypes()).toBe(expectedResult);
    });
  });
});
