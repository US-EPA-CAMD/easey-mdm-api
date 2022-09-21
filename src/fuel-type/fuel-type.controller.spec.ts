import { Test } from '@nestjs/testing';

import { FuelTypeService } from './fuel-type.service';
import { FuelTypeController } from './fuel-type.controller';
import { FuelTypeRepository } from './fuel-type.repository';
import { FuelTypeMap } from '../maps/fuel-type.map';
import { FuelTypeDTO } from '../dto/fuel-type.dto';

describe('FuelTypeController', () => {
  let service: FuelTypeService;
  let controller: FuelTypeController;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [FuelTypeController],
      providers: [
        FuelTypeMap,
        FuelTypeService,
        FuelTypeRepository
      ],
    }).compile();

    service = module.get(FuelTypeService);
    controller = module.get(FuelTypeController);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  describe('getFuelTypeCodes', () => {
    
    it('should return a list of fuel type codes', async () => {
      const expectedResult: FuelTypeDTO[] = [];

      jest.spyOn(
        service,
        'getFuelTypeCodes'
      ).mockResolvedValue(
        expectedResult
      );
      
      expect(
        await controller.getFuelTypeCodes()
      ).toBe(
        expectedResult
      );
    });

  });
});
