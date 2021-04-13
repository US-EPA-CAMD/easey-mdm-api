import { Test } from '@nestjs/testing';

import { UnitTypesService } from './unit-types.service';
import { UnitTypeRepository } from './unit-type-code.repository';
import { UnitTypeMap } from '../maps/unit-type.map';

const mockUnitTypeRepository = () => ({
  getAllUnitTypes: jest.fn(),
});

const mockMap = () => ({
  many: jest.fn(),
});

describe('-- Unit Type Service --', () => {
  let unitTypesService;
  let unitTypeRepository;
  let unitTypesMap;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UnitTypesService,
        {
          provide: UnitTypeRepository,
          useFactory: mockUnitTypeRepository,
        },
        { provide: UnitTypeMap, useFactory: mockMap },
      ],
    }).compile();

    unitTypesService = module.get(UnitTypesService);
    unitTypeRepository = module.get(UnitTypeRepository);
    unitTypesMap = module.get(UnitTypeMap);
  });

  describe('getAllUnitTypes', () => {
    it('repository.getAllUnitTypes() and returns all valid unit types', async () => {
      unitTypeRepository.getAllUnitTypes.mockResolvedValue(
        'list of unit types',
      );
      unitTypesMap.many.mockReturnValue('mapped DTOs');

      let result = await unitTypesService.getAllUnitTypes();

      expect(unitTypeRepository.getAllUnitTypes).toHaveBeenCalled();
      expect(unitTypesMap.many).toHaveBeenCalled();
      expect(result).toEqual('mapped DTOs');
    });
  });
});
