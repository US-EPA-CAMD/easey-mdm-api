import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { PressureMeasureCodeRepository } from './pressure-measure-code.repository';
import { PressureMeasureCodeService } from './pressure-measure-code.service';

const mockPressureMeasureCodeRepository = () => ({
  getPressureMeasureCodes: jest.fn(() => []),
});

describe('PressureMeasureCodeService', () => {
  let service: PressureMeasureCodeService;
  let repository: PressureMeasureCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Logger,
        PressureMeasureCodeService,
        {
          provide: PressureMeasureCodeRepository,
          useFactory: mockPressureMeasureCodeRepository,
        },
      ],
    }).compile();

    service = module.get<PressureMeasureCodeService>(PressureMeasureCodeService);
    repository = module.get<PressureMeasureCodeRepository>(PressureMeasureCodeRepository);
  });

  describe('getPressureMeasureCodes', () => {
    it('should call the PressureMeasureCodeRepository.getPressureMeasureCodes() and return a list of pressure measure codes', async () => {
      expect(service).toBeDefined();
      const result = await service.getPressureMeasureCodes();
      expect(result).toEqual([]);
      expect(repository.getPressureMeasureCodes).toHaveBeenCalled();
    });
  });
});
