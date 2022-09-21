import { Test } from '@nestjs/testing';

import { FuelTypeRepository } from './fuel-type.repository';
import { FuelTypeService } from './fuel-type.service';
import { FuelTypeMap } from '../maps/fuel-type.map';

const mockRepository = () => ({
  getFuelTypeCodes: jest.fn(),
});

describe('FuelTypeService', () => {
  let repository: any;
  let service: FuelTypeService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FuelTypeMap,
        FuelTypeService,
        {
          provide: FuelTypeRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get(FuelTypeService);
    repository = module.get(FuelTypeRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('getFuelTypeCodes', () => {

    it('should return a list of fuel type codes', async () => {
      repository.getFuelTypeCodes.mockResolvedValue([]);
      const results = await service.getFuelTypeCodes();

      expect(repository.getFuelTypeCodes).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });
});
