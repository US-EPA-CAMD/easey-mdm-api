import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { FuelCodeRepository } from './fuel-code.repository';
import { FuelCodeService } from './fuel-code.service';

const mockFuelCodeRepository = () => ({
  getFuelCodes: jest.fn(() => []),
});

describe('FuelCodeService', () => {
  let service: FuelCodeService;
  let repository: FuelCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        FuelCodeService,
        {
          provide: FuelCodeRepository,
          useFactory: mockFuelCodeRepository,
        },
      ],
    }).compile();

    service = module.get<FuelCodeService>(FuelCodeService);
    repository = module.get<FuelCodeRepository>(FuelCodeRepository);
  });

  describe('getFuelCodes', () => {
    it('should call the FuelCodeRepository.getFuelCodes() and return a list of fuel codes', async () => {
      const result = await service.getFuelCodes();
      expect(result).toEqual([]);
      expect(repository.getFuelCodes).toHaveBeenCalled();
    });
  });
});
