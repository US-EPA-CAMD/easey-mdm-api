import { Test } from '@nestjs/testing';

import { UnitTypeCodeService } from './unit-type-code.service';
import { UnitTypeCodeController } from './unit-type-code.controller';
import { UnitTypeCodeRepository } from './unit-type-code.repository';
import { UnitTypeCodeMap } from '../maps/unit-type-code.map';
import { UnitTypeCodeDTO } from '../dto/unit-type-code.dto';

describe('-- Unit Type Code Controller --', () => {
  let unitTypeCodeController;
  let unitTypeCodeService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [UnitTypeCodeController],
      providers: [UnitTypeCodeService, UnitTypeCodeMap, UnitTypeCodeRepository],
    }).compile();

    unitTypeCodeController = module.get(UnitTypeCodeController);
    unitTypeCodeService = module.get(UnitTypeCodeService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getAllUnitTypes', () => {
    it('should call the service and return a list of valid unit types', async () => {
      const expectedResult: UnitTypeCodeDTO[] = [];
      jest
        .spyOn(unitTypeCodeService, 'getAllUnitTypes')
        .mockResolvedValue(expectedResult);
      expect(await unitTypeCodeController.getAllUnitTypes()).toBe(
        expectedResult,
      );
    });
  });
});
