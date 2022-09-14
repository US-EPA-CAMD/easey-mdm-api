import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { HeatInputOilRepository } from './heat-input-oil.repository';
import { HeatInputOilService } from './heat-input-oil.service';

const mockHeatInputOilRepository = () => ({
  getHeatInputOils: jest.fn(() => []),
});

describe('HeatInputOilService', () => {
  let service: HeatInputOilService;
  let repository: HeatInputOilRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Logger,
        HeatInputOilService,
        {
          provide: HeatInputOilRepository,
          useFactory: mockHeatInputOilRepository,
        },
      ],
    }).compile();

    service = module.get<HeatInputOilService>(HeatInputOilService);
    repository = module.get<HeatInputOilRepository>(HeatInputOilRepository);
  });

  describe('getHeatInputOils', () => {
    it('should call the HeatInputOilRepository.getHeatInputOils() and return a list of oil heat input information', async () => {
      expect(service).toBeDefined();
      const result = await service.getHeatInputOils();
      expect(result).toEqual([]);
      expect(repository.getHeatInputOils).toHaveBeenCalled();
    });
  });
});
