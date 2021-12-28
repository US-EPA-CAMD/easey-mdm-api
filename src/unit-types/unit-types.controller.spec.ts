import { Test } from '@nestjs/testing';

import { UnitTypesService } from './unit-types.service';
import { UnitTypesController } from './unit-types.controller';
import { UnitTypeRepository } from './unit-type-code.repository';
import { UnitTypeMap } from '../maps/unit-type.map';
import { UnitTypeDTO } from '../dto/unit-type.dto';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

describe('-- Unit Types Controller --', () => {
  let unitTypesController;
  let unitTypesService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [UnitTypesController],
      providers: [UnitTypesService, UnitTypeMap, UnitTypeRepository],
    }).compile();

    unitTypesController = module.get(UnitTypesController);
    unitTypesService = module.get(UnitTypesService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getAllUnitTypes', () => {
    it('should call the service and return a list of valid unit types', async () => {
      const expectedResult: UnitTypeDTO[] = [];
      jest
        .spyOn(unitTypesService, 'getAllUnitTypes')
        .mockResolvedValue(expectedResult);
      expect(await unitTypesController.getAllUnitTypes()).toBe(expectedResult);
    });
  });
});
