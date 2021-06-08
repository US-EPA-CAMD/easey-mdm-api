import { Test } from '@nestjs/testing';

import { FuelTypesService } from './fuel-types.service';
import { FuelTypeRepository } from './fuel-type-code.repository';
import { FuelTypeMap } from '../maps/fuel-type.map';
import { FuelType } from '../entities/fuel-type-code.entity';
import { FuelGroup } from '../entities/fuel-group-code.entity';
import { FuelTypeDTO } from '../dto/fuel-type.dto';

const mockFuelTypeRepository = () => ({
  getAllFuelTypes: jest.fn(),
});

describe('-- Fuel Types Service --', () => {
  let fuelTypesService;
  let fuelTypeRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FuelTypesService,
        {
          provide: FuelTypeRepository,
          useFactory: mockFuelTypeRepository,
        },
        FuelTypeMap,
      ],
    }).compile();

    fuelTypesService = module.get(FuelTypesService);
    fuelTypeRepository = module.get(FuelTypeRepository);
  });

  describe('getAllFuelTypes', () => {
    it('calls repository.getAllFuelTypes() and returns all valid fuel types', async () => {
      let fuelTypeEntity: FuelType = new FuelType();
      let fuelTypeGroupEntity: FuelGroup = new FuelGroup();
      fuelTypeEntity.fuelTypeCode = '';
      fuelTypeEntity.fuelTypeDescription = '';
      fuelTypeEntity.fuelGroupCode = '';
      fuelTypeGroupEntity.fuelGroupDescription = '';
      fuelTypeEntity.fuelGroup = fuelTypeGroupEntity;

      const fuelTypeDTO: FuelTypeDTO = {
        fuelTypeCode: '',
        fuelTypeDescription: '',
        fuelGroupCode: '',
        fuelGroupDescription: '',
      };

      fuelTypeRepository.getAllFuelTypes.mockResolvedValue([fuelTypeEntity]);

      let result = await fuelTypesService.getAllFuelTypes();

      expect(fuelTypeRepository.getAllFuelTypes).toHaveBeenCalled();
      expect(result).toEqual([fuelTypeDTO]);
    });
  });
});
