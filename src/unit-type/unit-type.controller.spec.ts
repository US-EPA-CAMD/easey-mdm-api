import { Test } from '@nestjs/testing';

import { UnitTypeService } from './unit-type.service';
import { UnitTypeController } from './unit-type.controller';
import { UnitTypeRepository } from './unit-type.repository';
import { UnitTypeMap } from '../maps/unit-type.map';
import { UnitTypeDTO } from '../dto/unit-type.dto';

describe('UnitTypeController', () => {
  let service: UnitTypeService;
  let controller: UnitTypeController;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [UnitTypeController],
      providers: [
        UnitTypeMap,
        UnitTypeService,
        UnitTypeRepository
      ],
    }).compile();

    service = module.get(UnitTypeService);
    controller = module.get(UnitTypeController);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  describe('getUnitTypeCodes', () => {
    
    it('should return a list of unit type codes', async () => {
      const expectedResult: UnitTypeDTO[] = [];

      jest.spyOn(
        service,
        'getUnitTypeCodes'
      ).mockResolvedValue(
        expectedResult
      );
      
      expect(
        await controller.getUnitTypeCodes()
      ).toBe(
        expectedResult
      );
    });

  });
});
