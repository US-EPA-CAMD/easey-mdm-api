import { Test, TestingModule } from '@nestjs/testing';
import { MaximumFuelFlowRateCodeRepository } from './maximum-fuel-flow-rate-code.repository';
import { MaximumFuelFlowRateCodeService } from './maximum-fuel-flow-rate-code.service';

const mockMaximumFuelFlowRateCodeRepository = () => ({
  getMaximumFuelFlowRateCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('MaximumFuelFlowRateCodeService', () => {
  let maximumFuelFlowRateCodeService: MaximumFuelFlowRateCodeService;
  let maximumFuelFlowRateCodeRepository: MaximumFuelFlowRateCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MaximumFuelFlowRateCodeService,
        {
          provide: MaximumFuelFlowRateCodeRepository,
          useFactory: mockMaximumFuelFlowRateCodeRepository,
        },
      ],
    }).compile();

    maximumFuelFlowRateCodeService = module.get<MaximumFuelFlowRateCodeService>(
      MaximumFuelFlowRateCodeService,
    );
    maximumFuelFlowRateCodeRepository = module.get<
      MaximumFuelFlowRateCodeRepository
    >(MaximumFuelFlowRateCodeRepository);
  });

  describe('getMaximumFuelFlowRateCodes', () => {
    it('calls the MaximumFuelFlowRateCodeRepository and returns a maximum flow rate codes', async () => {
      const result = await maximumFuelFlowRateCodeService.getMaximumFuelFlowRateCodes();
      expect(result).toEqual([]);
      expect(
        maximumFuelFlowRateCodeRepository.getMaximumFuelFlowRateCodes,
      ).toHaveBeenCalled();
    });
  });
});
