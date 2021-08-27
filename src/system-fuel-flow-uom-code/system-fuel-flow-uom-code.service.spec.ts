import { Test, TestingModule } from '@nestjs/testing';
import { SystemFuelFlowUOMCodeRepository } from './system-fuel-flow-uom-code.repository';
import { SystemFuelFlowUOMCodeService } from './system-fuel-flow-uom-code.service';

const mockSystemFuelFlowUOMCodeRepository = () => ({
  getSystemFuelFlowUOMCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('SystemFuelFlowUOMCodeService', () => {
  let systemFuelFlowUOMCodeService: SystemFuelFlowUOMCodeService;
  let systemFuelFlowUOMCodeRepository: SystemFuelFlowUOMCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SystemFuelFlowUOMCodeService,
        {
          provide: SystemFuelFlowUOMCodeRepository,
          useFactory: mockSystemFuelFlowUOMCodeRepository,
        },
      ],
    }).compile();

    systemFuelFlowUOMCodeService = module.get<SystemFuelFlowUOMCodeService>(
      SystemFuelFlowUOMCodeService,
    );
    systemFuelFlowUOMCodeRepository = module.get<
      SystemFuelFlowUOMCodeRepository
    >(SystemFuelFlowUOMCodeRepository);
  });

  describe('getSystemFuelFlowUOMCodes', () => {
    it('calls the SystemFuelFlowUOMCodeRepository and returns a system fuel flow uom codes', async () => {
      const result = await systemFuelFlowUOMCodeService.getSystemFuelFlowUOMCodes();
      expect(result).toEqual([]);
      expect(
        systemFuelFlowUOMCodeRepository.getSystemFuelFlowUOMCodes,
      ).toHaveBeenCalled();
    });
  });
});
