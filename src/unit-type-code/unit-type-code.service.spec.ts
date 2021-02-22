import { Test } from '@nestjs/testing';

import { UnitTypeCodeService } from './unit-type-code.service';
import { UnitTypeCodeRepository } from './unit-type-code.repository';
import { UnitTypeCodeMap } from '../maps/unit-type-code.map';

const mockUnitTypeCodeRepository = () => ({
  find: jest.fn(),
});

const mockMap = () => ({
  many: jest.fn(),
});

describe('-- Unit Type Code Service --', () => {
  let unitTypeCodeService;
  let unitTypeCodeRepository;
  let unitTypeCodeMap;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UnitTypeCodeService,
        {
          provide: UnitTypeCodeRepository,
          useFactory: mockUnitTypeCodeRepository,
        },
        { provide: UnitTypeCodeMap, useFactory: mockMap },
      ],
    }).compile();

    unitTypeCodeService = module.get(UnitTypeCodeService);
    unitTypeCodeRepository = module.get(UnitTypeCodeRepository);
    unitTypeCodeMap = module.get(UnitTypeCodeMap);
  });

  describe('getAllUnitTypes', () => {
    it('repository.find() and returns all valid unit types', async () => {
      unitTypeCodeRepository.find.mockResolvedValue('list of unit types');
      unitTypeCodeMap.many.mockReturnValue('mapped DTOs');

      let result = await unitTypeCodeService.getAllUnitTypes();

      expect(unitTypeCodeRepository.find).toHaveBeenCalled();
      expect(unitTypeCodeMap.many).toHaveBeenCalled();
      expect(result).toEqual('mapped DTOs');
    });
  });
});
