import { Test } from '@nestjs/testing';

import { UnitTypesService } from './unit-types.service';
import { UnitTypesRepository } from './unit-types.repository';
import { UnitTypeMap } from '../maps/unit-type.map';

const mockUnitTypesRepository = () => ({
  find: jest.fn(),
});

const mockMap = () => ({
  many: jest.fn(),
});

describe('-- Unit Type Service --', () => {
  let unitTypesService;
  let unitTypesRepository;
  let unitTypesMap;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UnitTypesService,
        {
          provide: UnitTypesRepository,
          useFactory: mockUnitTypesRepository,
        },
        { provide: UnitTypeMap, useFactory: mockMap },
      ],
    }).compile();

    unitTypesService = module.get(UnitTypesService);
    unitTypesRepository = module.get(UnitTypesRepository);
    unitTypesMap = module.get(UnitTypeMap);
  });

  describe('getAllUnitTypes', () => {
    it('repository.find() and returns all valid unit types', async () => {
      unitTypesRepository.find.mockResolvedValue('list of unit types');
      unitTypesMap.many.mockReturnValue('mapped DTOs');

      let result = await unitTypesService.getAllUnitTypes();

      expect(unitTypesRepository.find).toHaveBeenCalled();
      expect(unitTypesMap.many).toHaveBeenCalled();
      expect(result).toEqual('mapped DTOs');
    });
  });
});

