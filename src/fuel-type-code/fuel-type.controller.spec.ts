import { Test } from '@nestjs/testing';

import { FuelTypeDTO } from '../dto/fuel-type.dto';
import { FuelTypeMap } from '../maps/fuel-type.map';
import { FuelTypeController } from './fuel-type.controller';
import { FuelTypeRepository } from './fuel-type-code.repository';
import { FuelTypesService } from './fuel-type.service';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

describe('-- Fuel Types Controller --', () => {
  let controller: FuelTypeController;
  let service: FuelTypesService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [FuelTypeController],
      providers: [FuelTypesService, FuelTypeMap, FuelTypeRepository],
    }).compile();

    controller = module.get(FuelTypeController);
    service = module.get(FuelTypesService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('* getAllFuelTypes', () => {
    it('should call the service and return a list of all valid fuel types', async () => {
      const expectedResult: FuelTypeDTO[] = [];
      jest.spyOn(service, 'getAllFuelTypes').mockResolvedValue(expectedResult);
      expect(await controller.getAllFuelTypes()).toBe(expectedResult);
    });
  });
});
