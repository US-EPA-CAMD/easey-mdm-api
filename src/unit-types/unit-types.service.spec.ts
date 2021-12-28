import { Test } from '@nestjs/testing';

import { UnitTypesService } from './unit-types.service';
import { UnitTypeRepository } from './unit-type-code.repository';
import { UnitTypeMap } from '../maps/unit-type.map';
import { UnitType } from '../entities/unit-type-code.entity';
import { UnitTypeGroup } from '../entities/unit-type-group-code.entity';
import { UnitTypeDTO } from '../dto/unit-type.dto';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

const mockUnitTypeRepository = () => ({
  getAllUnitTypes: jest.fn(),
});

describe('-- Unit Type Service --', () => {
  let unitTypesService;
  let unitTypeRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        UnitTypesService,
        {
          provide: UnitTypeRepository,
          useFactory: mockUnitTypeRepository,
        },
        UnitTypeMap,
      ],
    }).compile();

    unitTypesService = module.get(UnitTypesService);
    unitTypeRepository = module.get(UnitTypeRepository);
  });

  describe('getAllUnitTypes', () => {
    it('repository.getAllUnitTypes() and returns all valid unit types', async () => {
      let unitTypeEntity: UnitType = new UnitType();
      let unitTypeGroupEntity: UnitTypeGroup = new UnitTypeGroup();
      unitTypeEntity.unitTypeCode = '';
      unitTypeEntity.unitTypeDescription = '';
      unitTypeEntity.unitTypeGroupCode = '';
      unitTypeEntity.sortOrder = '';
      unitTypeGroupEntity.unitTypeGroupDescription = '';
      unitTypeEntity.unitTypeGroup = unitTypeGroupEntity;

      const unitTypeDTO: UnitTypeDTO = {
        unitTypeCode: '',
        unitTypeDescription: '',
        sortOrder: '',
        unitTypeGroupCode: '',
        unitTypeGroupDescription: '',
      };

      unitTypeRepository.getAllUnitTypes.mockResolvedValue([unitTypeEntity]);

      let result = await unitTypesService.getAllUnitTypes();

      expect(unitTypeRepository.getAllUnitTypes).toHaveBeenCalled();
      expect(result).toEqual([unitTypeDTO]);
    });
  });
});
