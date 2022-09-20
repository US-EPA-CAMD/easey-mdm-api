import { Test } from '@nestjs/testing';

import { UnitTypeRepository } from './unit-type.repository';
import { UnitTypeService } from './unit-type.service';
import { UnitTypeMap } from '../maps/unit-type.map';

const mockRepository = () => ({
  getUnitTypeCodes: jest.fn(),
});

describe('UnitTypeService', () => {
  let repository: any;
  let service: UnitTypeService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UnitTypeMap,
        UnitTypeService,
        {
          provide: UnitTypeRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get(UnitTypeService);
    repository = module.get(UnitTypeRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('getUnitgetUnitTypeCodesTypes', () => {

    it('should return a list of unit type codes', async () => {
      repository.getUnitTypeCodes.mockResolvedValue([]);
      const results = await service.getUnitTypeCodes();

      expect(repository.getUnitTypeCodes).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });
});
