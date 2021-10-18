import { Test, TestingModule } from '@nestjs/testing';
import { FuelIndicatorCodeRepository } from './fuel-indicator-code.repository';
import { FuelIndicatorCodeService } from './fuel-indicator-code.service';

const mockFuelIndicatorCodeRepository = () => ({
  getFuelIndicatorCodes: jest.fn(() => []),
});

describe('FuelIndicatorCodeService', () => {
  let service: FuelIndicatorCodeService;
  let repository: FuelIndicatorCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FuelIndicatorCodeService,
        {
          provide: FuelIndicatorCodeRepository,
          useFactory: mockFuelIndicatorCodeRepository,
        },
      ],
    }).compile();

    service = module.get<FuelIndicatorCodeService>(FuelIndicatorCodeService);
    repository = module.get<FuelIndicatorCodeRepository>(
      FuelIndicatorCodeRepository,
    );
  });

  describe('getFuelIndicatorCodes', () => {
    it('should call the FuelIndicatorCodeRepository.getFuelIndicatorCodes() and return a list of fuel indicator codes', async () => {
      const result = await service.getFuelIndicatorCodes();
      expect(result).toEqual([]);
      expect(repository.getFuelIndicatorCodes).toHaveBeenCalled();
    });
  });
});
